const config = require('./config');
const io = require('../io');
const time = require('../time');

module.exports = {
  createConfigService: config(io, time)
};
