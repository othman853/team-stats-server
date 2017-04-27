const config = require('./config');

module.exports = router => {

  const route = router.route('/config');

  return socket => {
    const handler = config(socket);
    route.post(handler.post);

    return router;
  }

};
