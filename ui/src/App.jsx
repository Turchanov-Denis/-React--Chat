import { useEffect, useState } from 'react'
import './scss/style.scss'
import JoinComponent from './component/JoinComponent';
import { useSelector, useDispatch } from 'react-redux'
import { changeAuth, setUsers,setMessages } from './redux/mainSlicer';
// import { io } from 'socket.io-client'
import axios from 'axios';
import socket from './socket'
import Chat from './component/Chat';
function App() {
  const joined = useSelector((state) => state.main.joined)
  const users = useSelector((state) => state.main.users)
  const messages = useSelector((state) => state.main.messages)
  const userName = useSelector((state) => state.main.userName)
  const dispatch = useDispatch()

  const onlogin = async ({ roomId, userName }) => {
    await axios.post('http://localhost:3000/rooms', { roomId, userName })
    socket.emit('ROOM:JOIN', { roomId, userName })
    const res = await axios.get(`http://localhost:3000/rooms/${roomId}`);
    dispatch(setUsers({ users: [userName] }))
    dispatch(changeAuth({ roomId, userName }))
    
  }
  const messageHelper = (messages) => {
    dispatch(setMessages(messages))
  }
  useEffect(() => {
    // onlogin({ roomId: 1, userName: 'Rafu' }) // point of entry, later throw in login page
    socket.on('ROOM:SET_USERS', (users) => {
      dispatch(setUsers({ users }))
    })
    socket.on('ROOM:NEW_MESSAGE', (messages) => {
      console.log('get',messages);
      dispatch(setMessages(messages))
    })
  }, [])

  return (
    <>
      <div className='wrapper'>
        {(!joined) ? <JoinComponent onlogin={onlogin}></JoinComponent> : <Chat messageHelper={messageHelper}   userName={userName} messages={messages} users={users}></Chat>}
        {/* {!joined && <JoinComponent onlogin={onlogin}></JoinComponent>} */}

      </div>
    </>
  )
}

export default App
