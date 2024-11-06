const { Controller } = require('egg');


class HomeController extends Controller {
  /**
   * 添加学生信息
   * @returns {Promise<void>}
   */
  async addStu() {
    const { ctx } = this;
    const { name, age } = ctx.request.body;
    const result = await ctx.service.stu.addStu(name, age);
    if (result) {
      ctx.body = {
        status: 200,
        msg: '添加成功',
        data: {},
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '添加失败',
        data: {},
      };
    }
  }
}

module.exports = HomeController;

