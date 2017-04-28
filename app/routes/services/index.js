const io = require('./io-service');
const time = require('./time-service');
const tvConfiguration = require('./tv-configuration-service');
const socket = require('./socket-service');

module.exports = function ServicesConstructor(configDir, mainSocketServer) {

  return {
    io,
    time,
    tvConfiguration: tvConfiguration(io, time, configDir),
    socket: socket(mainSocketServer)
  };

};
