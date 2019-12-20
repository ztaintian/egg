'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/insetUser', controller.user.index);
  router.get('/getUser', controller.user.getUser);
};