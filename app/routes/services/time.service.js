const moment = require('moment');

const DATE_TIME_STRING_FORMAT = 'Y-MM-D-hh-mm-ss';

module.exports = {

  now: {
    asString: (format = DATE_TIME_STRING_FORMAT) => moment().format(format)
  }

};
