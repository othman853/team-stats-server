const tvRoutes = require('./tv');
const tvRouter = require('express').Router();

module.exports = {

  tv: socket => {
    tvRoutes.config(tvRouter.route('/config'))(socket)
    return tvRouter;
  }

};
