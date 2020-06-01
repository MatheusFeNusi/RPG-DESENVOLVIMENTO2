import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import io from 'socket.io-client';
import uuid from 'uuid/v4';
import './Chat.css'


const myId = uuid();
const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('[IO] => A new Connection as estabelecida'));

var nome;
const salvarPersonagem = () =>{
    let armazenar = document.getElementById('personagem').value;
    nome = armazenar;
    document.getElementById('divOcultar').style.display = 'none';
    document.getElementById('chatMostrar').style.display = 'inline';
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


   // const handleTeste = e => {
    //    socket.emit('chat.message', this.state);
  //  }


    const handleFormSubmit = event => {
       
        // navegador não ficar com reload
        event.preventDefault();

        //limpa mensagem
        if (message.trim()) {
            socket.emit('chat.message', {
                id: myId,
                message,
                nome: nome
            });
            updateMessage('');
        }
    }

    // recebe event e atualiza a mensagem
    const handleInputChange = event => updateMessage(event.target.value);

    return (
        <>
        <div id="divOcultar">
            <br/>
            <br/>
        < InputText id="personagem" placeholder="Nome do personagem" style={{width: '300px', marginLeft: '50px'}}
        tooltip="Digite o nome do seu personagem para entrar no chat" />
        <Button label="Salvar" onClick={salvarPersonagem} className="p-button-success" />
        </div>
        <span id="chatMostrar" style={{display: 'none'}}>
        <main  className="containerer" >

            <ul className="list">
                {messages.map((m, index) => (
                    <li className="list__item list__item--mine" key={index} >
                        <span className="message message--mine" >
                            {m.nome ? m.nome + ": " + m.message  : "Jogador: " + m.message}
                        </span>
                    </li>
                ))}
            </ul>
            <form className="form" onSubmit={handleFormSubmit}>
                < InputText className="form__field"
                    placeholder="Digite sua mensagem aqui" type="text" autoFocus
                    onChange={handleInputChange} value={message} />
            </form>
        </main>
        </span>
        </>
    )
}
export default Chat;
