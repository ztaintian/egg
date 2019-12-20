'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async insertUser(params) {
    var result = await this.app.mysql.insert("user", params);
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
}
module.exports = UserService;