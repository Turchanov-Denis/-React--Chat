import { useState } from 'react'
import { io } from 'socket.io-client'
import './scss/style.scss'
import JoinComponent from './component/JoinComponent';


function App() {
  const connectSocket = () => { io('http://localhost:3000') }


  return (
    <>
      <div className='wrapper'>
        <JoinComponent></JoinComponent>
      </div>
    </>
  )
}

export default App
