'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    let users = await this.ctx.service.user.insertUser();
    this.ctx.body = users;
  }
  async getUser() {
    let users = await this.ctx.service.user.getUser();
    this.ctx.body = users;
  }

}
module.exports = UserController;