module.exports = (ioService, timeService) => configDir => ({
  save: config => new Promise(
    (resolve, reject) => ioService.file.write(
      `${configDir}/config-${timeService.dateTime.now.asString()}.json`,
      ioService.json.stringify(config)
    )
    .then(resolve)
    .catch(reject)
  )
});
