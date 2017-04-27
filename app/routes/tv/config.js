module.exports = socket => ({
  post: (request, response) => {
    socket.emit('config-update', request.body);
    response.sendStatus(200);
  }
});
