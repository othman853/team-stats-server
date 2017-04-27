module.exports = (socket, service) => ({
  post: (request, response) => {
    service.save(request.body)
    .then(() => {
      console.log('Saved');
      socket.emit('config-update', request.body);
      return response.sendStatus(200);
    })
    .catch(error => {
      return response.status(500).json({
        cause: error.cause,
        message: error.message
      });
    });
  }
});
