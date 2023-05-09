import React, { useEffect} from 'react'
import { useState } from 'react'
// import io from 'socket.io-client'
import './Chat.css'


const Chat =() => {
    var [showModel, setShowModel] = React.useState(false)

    return (
        <div>
            <div className="bubble"  >
                <button class="open-button" onClick={() => {setShowModel(true) }}>Chat</button>

            </div>


            
                <div class="chat-popup" id="myForm" style={{display: showModel ? 'block' : 'none'}}>
                    <form class="form-container">
                        <h1>Chat</h1>

                        <label for="msg"><b>Message</b></label>
                        <textarea placeholder="Type message.." name="msg" required></textarea>

                        <button type="submit" class="btn">Send</button>
                        <button type="button" class="btn cancel" onClick={()=>{setShowModel(false)}}>Close</button>
                    </form>
                </div>
            
            

            <div onClick={() => setShowModel(false)}/>
            {/* <div onClick={() => setShowModel(false)} >
                <div className="cross">
                    /*<img className='close_button' src="" alt="close_button" />

                </div>

            </div> */}
        </div>
    )
}
export default Chat


