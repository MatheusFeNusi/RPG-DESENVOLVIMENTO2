const koa = require('koa');
const http = require('http');
const socket = require('socket.io');

const app = new koa();
const server = http.createServer(app.callback());
const io = socket(server);

const SERVER_HOST = 'localhost';
const SERVER_PORT = '8080';

io.on('connect', socket =>{
    console.log('[IO] Connection => Server has new connection');
    socket.on('chat.message', data => {
        console.log('[SOCKET] => Chat.message => ', data);
        io.emit('chat.message', data);
        
    })
    socket.on('disconnect', () => {
        console.log('[SOCKET] Chat.message => A connect was disconnect')
    })
})

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`);
    console.log(`[HTTP] Listen => Press CTRL+C to stop it `);

})