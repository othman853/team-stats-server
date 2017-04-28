const bodyParser = require('body-parser');
const expressServer = require('express')();
const httpServer = require('http').createServer(expressServer);
const socketServer = require('socket.io')(httpServer);
const routesConstructor = require('./routes');

module.exports = configDir => {

  const routes = routesConstructor(configDir, socketServer);

  expressServer.use(bodyParser.json());
  expressServer.use('/tv', routes.tv);

  return {
    http: httpServer,
    express: expressServer,
    socket: socketServer
  };

};
