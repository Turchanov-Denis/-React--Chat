import React from 'react'
import { useState,useRef,useEffect } from 'react'
import '../scss/chat.scss'
import socket from '../socket.js'
export default function Chat({ users, messages, userName,messageHelper }) {
    const [text, setMessage] = useState('')
    const messagesRef = useRef(null)
    const areaHelper = (e) => {
        console.log(messages);
        setMessage(e.target.value)
    }
    const sendHelper = () => {
        socket.emit('ROOM:NEW_MESSAGE', { userName, text, roomId: 1 })
        messageHelper({ userName, text })
        setMessage('')
    }
    useEffect(()=>{
        messagesRef.current.scrollTo(0,99999)
    },[messages])
    return (
        <div className='chat'>
            <div className='chat__users'>
                <b>{`Users (${users.length}):`}</b>
                <ul>
                    {users.length > 0 && users.map((user, index) => <li key={index}>{user}</li>)}
                </ul>
            </div>
            <div className='chat__messages'>
                <div ref={messagesRef} className='messages'>
                    {messages.length > 0 && messages.map(message => <div className='message'><p>{message.text}</p> <div><span>{message.userName +'    '+ (new Date()).getHours() + ':' + (new Date()).getMinutes() }</span></div></div>)}
                    
                </div>
                <div className='chat__field'>
                    <div className="form-group">

                        <textarea onChange={areaHelper} value={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button onClick={sendHelper} type="button" className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    )
}