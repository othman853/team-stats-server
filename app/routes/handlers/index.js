const tvConfiguration = require('./tv-configuration-handler');

function HandlersConstructor(services) {

  return {
    tv: {
      configuration: tvConfiguration(services)
    }
  };

};

module.exports = HandlersConstructor;
