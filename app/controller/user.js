'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    let flag = await this.ctx.service.user.getUserName(username);
    if (flag) {
      if (password === flag.password) {
        ctx.body = {
          successFlag: 'Y',
          errorMsg: '登录成功'
        }
      } else {
        ctx.body = {
          successFlag: 'N',
          errorMsg: '密码错误'
        }
      }
    } else {
      ctx.body = {
        successFlag: 'N',
        errorMsg: '用户名不存在！'
      }
    }
  }
  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const nowTime = new Date();
    const userNew = {
      id: '111',
      username: username,
      password: password,
      create_time: nowTime
    };
    let flag = await this.ctx.service.user.getUserName(userNew.username);
    if (!flag) {
      await ctx.service.user.register(userNew);
      ctx.body = {
        successFlag: 'Y',
        errorMsg: '注册成功！'
      };
    } else {
      ctx.body = {
        successFlag: 'N',
        errorMsg: '用户名已存在！'
      }
    }
  }
  async addUser() {
    var params = this.ctx.request.body; // 获取post参数
    let users = await this.ctx.service.user.insertUser(params);
    this.ctx.body = users;
  }
  async getUser() {
    var params = this.ctx.query;
    let users = await this.ctx.service.user.getUser(params.id);
    this.ctx.body = users;
  }
  async delUser() {
    var params = this.ctx.query; // 获取get参数
    let users = await this.ctx.service.user.delUser(params.id);
    this.ctx.body = users;
  }
  async updateUser() {
    var params = this.ctx.request.body;
    let users = await this.ctx.service.user.updateUser(params);
    this.ctx.body = users;
  }

}
module.exports = UserController;