const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    // let result = await this.app.mysql.insert("user",{username:"lisi",password:"1234"})
    const { ctx } = this;
    console.log(ctx.query)
    ctx.body = dataList;
  }
}

module.exports = NewsController;

