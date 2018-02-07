'use strict';

const DEBUG = Boolean(process.env.DEBUG);

module.exports = appInfo => {
    const config = {};

    // config.security = {
    //     csrf: false
    // }
    //
    // config.cors = {
    //     origin: 'http://localhost:3000',
    //     credentials: true,
    // }

    return config;
};
