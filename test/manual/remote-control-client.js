const getPort = require('get-port');
const express = require('express');
const socketClient = require('socket.io-client')('http://localhost:4567/control');

socketClient.on('connect_error', error => console.log(error));

socketClient.on('connect', () => console.log('This control is connected to the server'));
socketClient.on('config-update', config => console.log(config));

getPort().then(port => {
  express().listen(port, () => console.log(`Up on ${port}`));
});
