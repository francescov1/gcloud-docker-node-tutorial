'use strict';
const config = require('./');

module.exports = function() {

  const mongoose = require('mongoose');
  mongoose.Promise = require('bluebird');

  // set up database
  mongoose.connect(config.mongodb_uri, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => console.log('mongodb connected'));

  mongoose.connection.on('open', () => console.log('mongodb connection opened'));

  mongoose.connection.on('error', err => console.log('mongodb error: ' + err));

  mongoose.connection.on('disconnected', () => console.log('mongodb disconnected'));

  process.on('SIGINT', () => mongoose.connection.close(() => process.exit(0)));

};
