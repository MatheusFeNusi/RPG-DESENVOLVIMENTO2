import React, {useState} from 'react';
import './Chat.css'
import io from 'socket.io-client'

const socket = io('http://localhost:8080')
socket.on('connect', () => console.log('[IO] connect => new connection' ))

const  Chat = ()  => {
const [message,updateMessage] = useState('')
const [messages,updateMessages] = useState([])

const handleFormSubmit = event => {
    event.preventDefault()
    if(message.trim()){
        updateMessages([...messages,{
            id:1,
            message
        }])
        updateMessage('')
    }
}

const handleInputChange = event =>
     updateMessage(event.target.value)
 return ( 
    <main className = "container"> 
        <ul className="list">

            { messages.map(m => 
                 <li className ="list__item list__item--mine">
                 <span className="message message--mine" key={m.id}> 
                     {m.message}
                 </span>    
             </li>
                )}
           
            < form className= "form" onSubmit={handleFormSubmit}> 
                <input 
                onChange= {handleInputChange} className ="form__field" 
                placeholder="digite uma mensagem" type="text" value={message} />
            </form>

        </ul>       
    </main>

)
 }

export default Chat