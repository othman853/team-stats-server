const bodyParser = require('body-parser');
const expressServer = require('express')();
const httpServer = require('http').createServer(expressServer);
const socketServer = require('socket.io')(httpServer);
const routes = require('./routes');
const tvSocketServer = socketServer.of('/tv');
const controlSocketServer = socketServer.of('/control');

tvSocketServer.on('connection', client => {
  console.log('A new TV is connected');
});

controlSocketServer.on('connection', client => {
  console.log('A new Remote Control is connected');
});

expressServer.use(bodyParser.json());
expressServer.use('/tv', routes.tv(tvSocketServer));

expressServer.post('/config', (request, response) => {
  tvSocketServer.emit('config-update', request.body);
  return response.sendStatus(200);
});

module.exports = {
  http: httpServer,
  express: expressServer,
  socket: {
    all: socketServer,
    tv: tvSocketServer,
    control: controlSocketServer
  }
};
