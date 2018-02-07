'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517815985491_124';

  // add your config here
  config.middleware = [];

  // config.security = {
  //     csrf: false
  // };
  //
  config.cors = {
      origin: 'http://localhost:3000',
      credentials: true,
  };

  return config;
};
