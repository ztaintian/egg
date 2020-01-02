'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async register(params) {
    var result = await this.app.mysql.insert("user", params);
    return result;
  }
  async insertUser(params) {
    var result = await this.app.mysql.insert("user", params);
    return result;
  }
  async getUserName(username) {
    var result;
    if (username) {
      result = await this.app.mysql.get("user", { username: username });
      console.log('resultresult', result)
    }
    return result;
  }
  async getUser(id) {
    var result;
    if (id) {
      result = await this.app.mysql.get("user", { id: id });
    } else {
      result = await this.app.mysql.select("user");
    }
    return result;
  }
  async delUser(id) {
    const result = await this.app.mysql.delete('user', { id: id });
    return result;
  }
  async updateUser(params) {
    const result = await this.app.mysql.update('user', params);
    return result;
  }

}
module.exports = UserService;