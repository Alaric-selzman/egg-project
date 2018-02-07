'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;

    router.get('/api/test/:testId', controller.home.testApi);
    router.get('*', controller.home.index);
};
