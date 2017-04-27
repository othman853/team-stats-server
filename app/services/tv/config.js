module.exports = (ioService, timeService) => configDir => ({
  save: config => new Promise(
    (resolve, reject) => ioService.file.write(
      `${configDir}/config-${timeService.dateTime.now.asString()}.json`,
      ioService.json.stringify(config)
    )
    .then(() => {
      console.log(`Saved at: ${configDir}`);
      console.log('Service.save => OK');
      return resolve();
    })
    .catch(error => {
      console.log(`Failed while trying to save at: ${configDir}`);
      console.log('Service.save => FAIL');
      return reject(error)
    })
  )
});
