const pg = require('pg');

module.exports = app => {
  const config = {
    host: 'localhost',
    user: 'postgres',     
    password: '1234',
    database: 'pizzaria',
    port: 5432
  };

  const client = new pg.Client(config);

  client.connect(err => {
      if (err) throw err;
  });

  return client;
};
