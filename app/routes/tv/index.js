module.exports = {

  config: route => socket =>  {
    route.post((request, response) => {
      socket.emit('config-update', request.body);
      response.sendStatus(200);
    });
  }

};
