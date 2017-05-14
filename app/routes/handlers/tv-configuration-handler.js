function TvConfigurationHandler(services) {

  return {

    post(request, response) {

      services.tvConfiguration
      .save(request.body)
      .then(() => {
        services.socket.channels.tv.emit('CONFIG_UPDATE', request.body);
        return response.sendStatus(201);
      })
      .catch(error => {
        response.status(500);
        return response.json({ error: error.message })
      });
    }

  };

};

module.exports = TvConfigurationHandler;
