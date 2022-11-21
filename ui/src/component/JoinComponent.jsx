import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import connectSocket from '../socket';
import axios from 'axios'
import '../scss/join.scss'


export default function JoinComponent({ onlogin,users }) {
  const [roomId, setRoomId] = useState(1)
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)
  const inputRoomHandler = (event) => {
    setRoomId(event.target.value)
  }
  const inputNameHandler = (event) => {
    setUserName(event.target.value)
  }
  const onJoin = async () => {
    if (!roomId || !userName) { return alert('Fill field') }
    setLoading(prev => !prev)
    const obj = { roomId, userName }
    await axios.post('http://localhost:3000/rooms', { roomId, userName })
    onlogin(obj)
  }
  return (
    <div className='join'>
      <h1>Chat</h1>
      <img src='Hgj.png'></img>
      {/* <input tepe='text' placeholder='Room ID' value={roomId} onChange={inputRoomHandler}></input> */}
      <input tepe='text' placeholder='Name' value={userName} onChange={inputNameHandler}></input>
      <Button disabled={!loading} onClick={onJoin} variant="outline-primary" >{(loading) ? 'Join' : 'Joining...'}</Button>
    </div>
  )
}