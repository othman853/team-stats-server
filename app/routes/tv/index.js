module.exports = {

  config: {
    post: socket => (request, response) => {
      socket.emit('config-update', request.body);
      response.sendStatus(200);
    }
  }

};
