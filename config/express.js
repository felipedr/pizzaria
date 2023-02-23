const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign    = require('consign');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
  app.use(bodyParser.json())

  consign({cwd: 'api'})
    .then('controllers')
    .then('routes')
    .then('db')
    .into(app)

  return app;
};