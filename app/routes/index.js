const express = require('express');
const handlersConstructor = require('./handlers');
const servicesConstructor = require('./services');

const routers = {
  tv: express.Router()
};

const routes = {
  tv: {
    configuration: routers.tv.route('/config')
  }
}

function RoutesConstructor(configDir, mainSocketServer) {

  const services = servicesConstructor(configDir, mainSocketServer);
  const handlers = handlersConstructor(services);

  routes.tv.configuration.post(handlers.tv.configuration.post);

  return routers;
};

module.exports = RoutesConstructor;
