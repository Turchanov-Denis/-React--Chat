import React from 'react'
import { useState } from 'react'
import '../scss/chat.scss'

export default function Chat({ users, messages, userName }) {
    const [message, setMessage] = useState('')

    const areaHelper = (e) => {
        setMessage(e.target.value)
    }
    const sendHelper = () => {
        setMessage('')
    }
    return (
        <div className='chat'>
            <div className='chat__users'>
                <b>{`Users (${users.length}):`}</b>
                <ul>
                    {users.length > 0 && users.map((user, index) => <li key={index}>{user}</li>)}
                </ul>
            </div>
            <div className='chat__messages'>
                <div className='messeges'>
                    {messages.length > 0 && messages.map(message => <div className='message'><p>{message}</p> <div><span>{userName}</span></div></div>)}
                </div>
                <div className='chat__field'>
                    <div className="form-group">

                        <textarea onChange={areaHelper} value={message} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button onClick={sendHelper} type="button" className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    )
}