const fs = require('fs');
const path = require('path');

module.exports = {
  file: {
    write: (name, content) => new Promise((resolve, reject) => {
      const writeCallback = (error) => error ? reject(error) : resolve();
      return fs.writeFile(name, content, writeCallback);
    })

  },
  json: {
    stringify: JSON.stringify
  },
  path: {
    join: path.join
  }
};
