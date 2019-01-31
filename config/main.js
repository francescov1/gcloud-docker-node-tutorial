'use strict';
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  node_env: process.env.NODE_ENV || 'development',
  mongodb_uri: process.env.MONGODB_URI
};
