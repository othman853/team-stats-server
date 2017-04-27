const { config } = require('./tv');
const tvRouter = require('express').Router();
const tvConfigRoute = tvRouter.route('/config');

module.exports = {

  tv: socket => {
    tvConfigRoute.post(config.post(socket));
    return tvRouter;
  }

};
