const assert = require('assert');

function SocketService (mainSocketServer) {

  assert.ok(mainSocketServer, 'SocketServer is not present at SocketService');

  const events = {
    CONNECTION: 'connection',
    CONFIG_UPDATE: 'config-update'
  };

  const channels = {
    tv: mainSocketServer.of('/tv'),
    control: mainSocketServer.of('/control')
  };

  channels.tv.on(events.CONNECTION,
    console.log.bind(console, 'A new TV has connected')
  );

  channels.control.on(events.CONNECTION,
    console.log.bind(console, 'A new Remote Control has connected')
  );

  return { events, channels };

};

module.exports = SocketService;
