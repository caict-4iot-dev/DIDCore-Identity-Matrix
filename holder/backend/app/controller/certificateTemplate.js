const { Controller } = require('egg');

class certificateTemplateController extends Controller {
  /**
   * 获取凭证模版列表
   * @returns {Promise<void>}
   */
  async getCertificateTemplate() {
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    try {
      const result = await ctx.service.cerficateTemplate.getCertificateTemplate();
      res = {
        code: 200,
        data: result,
        msg: 'success',
      };
    } catch (e) {
      console.log('e', e.Error, e);
      res = {
        code: 500,
        data: JSON.stringify(e.Error),
        msg: 'error',
      };
    }
    console.log('res', res);
    ctx.body = res;
  }
}

module.exports = certificateTemplateController;

