import React, { Component,useEffect, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './chat.css';
import io from 'socket.io-client';
import uuid from 'uuid/v4';

const myId = uuid();
const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('[IO] => A new Connection as estabelecida'));

var nomes = 0;
if(nomes == 0){ 
 nomes = prompt('Qual seu nome?');
}
const Chat = () => {
    // posição zero a mensagem e a posição 1 realizara um update no estado
    const [message, updateMessage] = useState('');
    const [messages, updateMessages] = useState([]);

    // 
    useEffect(() => {
        const handleNewMessage = newMessage => updateMessages([...messages, newMessage]);
        socket.on('chat.message', handleNewMessage);
        return () => socket.off('chat.message', handleNewMessage)
    }, [messages]);

    const handleFormSubmit = event => {
        // navegador não ficar com reload
        event.preventDefault();

        //limpa mensagem
        if (message.trim()) {
            socket.emit('chat.message', {
                id: myId,
                message,
                nome: nomes
            });
            updateMessage('');
        }
    }
   
    // recebe event e atualiza a mesagem
    const handleInputChange = event => updateMessage(event.target.value);

const valor = messages.map((m)=>( 
    m.nome ? m.nome + ": " + m.message : "Jogador: " + m.message
))
    
    const br = <br />;

        return (
        <main className="container">
            <ul className="list">
           <InputTextarea></InputTextarea> 
            <InputTextarea ClassName="list__item"  style={{marginLeft: '-32px',width: '700px', height: '100px'}}
 value={valor } rows={1} cols={1}></InputTextarea>
                
                   
            </ul>
            <form className="form" onSubmit={handleFormSubmit}>
                < InputText className="form__field"
                    placeholder="Digite sua mensagem aqui" type="text" autoFocus
                    onChange={handleInputChange} value={message} />
            </form>
        </main>
    )
}
export default Chat;