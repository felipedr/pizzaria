const pg = require('pg');

module.exports = app => {
  const config = {
    host: 'localhost',
    user: '',     
    password: '',
    database: 'pizzaria',
    port: 5431
  };

  const client = new pg.Client(config);

  client.connect(err => {
      if (err) throw err;
  });

  return client;
};
