const server = require('socket.io')();

server.on('connection', client => {

  console.log('Connection');

  client.emit('yo', { hello: 'this is server '});
});

server.listen(4567);
