const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const PORT = 4000;
const app = express();

const server = http.createServer(app)

// receber evento e vai enviar a todas aplicações conectadas
const io = socketIO(server);


io.on('connection', socket => {
  
  

  console.log('Novo usuario esta conectado');

  socket.on('infoEvent', (information) => {
    console.log('informação recebida');
    
    //emite para todas os serviços conectados
    io.sockets.emit('infoEvent', information);

  })
  
  
  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  })

})

server.listen(PORT, () => console.log(`Listando server na port: ${PORT}`))


















//const express = require('express');
//const path = require('path');
// app = express();
//const server = require('http').createServer(app);

//const io = require('socket.io')(server);

// a parttir de interação 
//app.use(express.static(path.join(__dirname, 'Interacao')));
//app.set('views', path.join(__dirname, 'Interacao'));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'js');

//app.use('/interacao', (req, res) =>{
  //  res.render('Interacao.js')
//})

//io.on('connection', socket => {

//})

//server.listen(4000)
