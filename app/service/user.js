'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async insertUser() {
    var result = await this.app.mysql.insert("user", { name: "li", id: "2" });
    return 1;
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