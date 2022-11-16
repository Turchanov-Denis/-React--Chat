import React from 'react'


export default function Chat() {
    return (
        <div className='chat'>
            <div className='chat__users'>
                <b>{`Users (1):`}</b>
                <ul>
                    <li>Test user</li>
                </ul>
            </div>
            <div className='chat__messages'>
                <div className='messeges'>
                    <div className='message'><p>Lorem</p> <div><span>Test user</span></div></div>
                    <div className='message'><p>Lorem</p> <div><span>Test user</span></div></div>
                </div>
                <div className='chat__field'>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    )
}