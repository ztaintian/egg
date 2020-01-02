'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/addUser', controller.user.addUser); // 增
  router.post('/updateUser', controller.user.updateUser); // 改
  router.get('/getUser', controller.user.getUser); // 查
  router.get('/delUser', controller.user.delUser); // 删
  router.post('/register', controller.user.register); // 注册用户
  router.post('/login', controller.user.login); // 登陆
};