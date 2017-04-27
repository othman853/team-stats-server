const args = require('yargs')
  .default({ configDir: '/tmp/team-stats/config', port: 4567 })
  .argv;

const servers = require('./servers')(args.configDir);

servers.http.listen(args.port, () => console.log(`Up on ${args.port}`));
