import { useEffect, useState } from 'react'
import './scss/style.scss'
import JoinComponent from './component/JoinComponent';
import { useSelector, useDispatch } from 'react-redux'
import { changeAuth } from './redux/mainSlicer';
import socket from './socket'
import Chat from './component/Chat';
function App() {
  const joined = useSelector((state) => state.main.joined)
  const dispatch = useDispatch()

  const onlogin = (obj) => {

    dispatch(changeAuth(obj))

    socket.emit('ROOM:JOIN', obj)

  }
  useEffect(() => {
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
