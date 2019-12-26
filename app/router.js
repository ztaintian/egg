'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/addUser', controller.user.addUser); // 增
  router.get('/getUser', controller.user.getUser); // 查
  router.get('/delUser', controller.user.delUser); // 删
};