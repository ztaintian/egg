'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async addUser() {
    var params = this.ctx.request.body; // 获取post参数
    let users = await this.ctx.service.user.insertUser(params);
    this.ctx.body = users;
  }
  async getUser() {
    let users = await this.ctx.service.user.getUser();
    this.ctx.body = users;
  }
  async delUser() {
    var params = this.ctx.query; 
    let users = await this.ctx.service.user.delUser(params.id);
    this.ctx.body = users;
  }

}
module.exports = UserController;