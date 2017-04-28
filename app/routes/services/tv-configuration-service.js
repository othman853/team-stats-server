function TvConfigurationService (ioService, timeService, directory) {

  return {
    save: (config) => new Promise(
      (resolve, reject) => ioService.file.write(
        `${directory}/config-${timeService.dateTime.now.asString()}.json`,
        ioService.json.stringify(config)
      )
      .then(resolve)
      .catch(reject)
    )
  }

};

module.exports = TvConfigurationService;
