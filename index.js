const bodyParser = require('body-parser');
const app = require('express')();
const httpServer = require('http').createServer(app);
const socketServer = require('socket.io')(httpServer);

socketServer.on('connection', client => {
  console.log('Connection');
});

const tvs = socketServer.of('/tv');
const remoteControls = socketServer.of('/control');

tvs.on('connection', client => {
  console.log('A new TV is connected');
});

remoteControls.on('connection', client => {
  console.log('A new Remote Control is connected');
});

app.use(bodyParser.json());

app.post('/config', (request, response) => {
  tvs.emit('config-update', request.body);
  return response.sendStatus(200);
});


httpServer.listen(4567, () => console.log('Up on 4567'));
