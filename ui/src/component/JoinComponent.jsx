import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import connectSocket from '../socket';
import axios from 'axios'

export default function JoinComponent({ onlogin }) {
  const [roomId, setRoomId] = useState('')
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
    await axios.post('http://localhost:3000/rooms', { roomId, userName })
    onlogin()
  }
  return (
    <div className='join'>
      <input tepe='text' placeholder='Room ID' value={roomId} onChange={inputRoomHandler}></input>
      <input tepe='text' placeholder='Name' value={userName} onChange={inputNameHandler}></input>
      <Button disabled={!loading} onClick={onJoin} variant="outline-primary" >{(loading) ? 'Join' : 'Joining...'}</Button>
    </div>
  )
}