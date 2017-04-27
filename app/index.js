const bodyParser = require('body-parser');
const servers = require('./servers');

servers.http.listen(4567, () => console.log('Up on 4567'));
