import { useEffect, useState } from 'react'
import './scss/style.scss'
import JoinComponent from './component/JoinComponent';
import { useSelector, useDispatch } from 'react-redux'
import { changeAuth } from './redux/mainSlicer';
// import { io } from 'socket.io-client'
import axios from 'axios';
import socket from './socket'
import Chat from './component/Chat';
function App() {
  const joined = useSelector((state) => state.main.joined)
  const dispatch = useDispatch()

  const onlogin = async ({ roomId, userName }) => {
    await axios.post('http://localhost:3000/rooms', { roomId, userName })
    dispatch(changeAuth({ roomId, userName }))
    socket.emit('ROOM:JOIN', { roomId, userName })
  }
  useEffect(() => {
    onlogin({ roomId: 1, userName: 'Rafu' }) // point of entry, later throw in login page
    socket.on('ROOM:JOINED', (users) => {
      console.log(users);
    })

  }, [])
  return (
    <>
      <div className='wrapper'>
        {/* {!joined && <JoinComponent onlogin={onlogin}></JoinComponent>} */}
        <Chat></Chat>
      </div>
    </>
  )
}

export default App
