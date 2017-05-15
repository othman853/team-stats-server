const { file, json, path } = require('./io-service');
const time = { dateTime } = require('./time-service');

module.exports = {

  save: (directory, config) => new Promise((resolve, reject) => {
    configName = `config-${time.now.asString()}.json`;

    file
      .write(path.join(directory, configName), json.stringify(config))
      .then(resolve)
      .catch(reject)
  })

};
