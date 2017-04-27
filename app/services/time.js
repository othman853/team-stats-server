const moment = require('moment');

const DATE_STRING_FORMAT = 'Y-MM-D';

module.exports = {
  date: {
    today: {
      asString: (format = DATE_STRING_FORMAT) => moment().format(format)
    }
  }
};
