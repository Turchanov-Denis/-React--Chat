import React from 'react'
import Button from 'react-bootstrap/Button';

export default function JoinComponent() {
    return (
        <div className='join'>
          <input placeholder='Room ID'></input>
          <input placeholder='NickName'></input>
          <Button variant="outline-primary" >Join</Button>
        </div>
    )
}