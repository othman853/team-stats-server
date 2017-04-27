const fs = require('fs');

module.exports = {
  file: {
    write: (name, content) => new Promise(
      (resolve, reject) =>
        fs.writeFile(name, content, error => error ? reject(error) : resolve())
    )
  },
  json: {
    stringify: JSON.stringify
  }
}
