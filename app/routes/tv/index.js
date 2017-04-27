const config = require('./config');
const serviceCreator = require('../../services/tv');

module.exports = router => {

  const route = router.route('/config');

  return (socket, configDir) => {
    const service = serviceCreator.createConfigService(configDir)
    const handler = config(socket, service);
    route.post(handler.post);

    return router;
  };

};
