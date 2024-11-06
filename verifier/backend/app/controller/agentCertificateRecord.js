const { Controller } = require('egg');

class agentCertificateRecordController extends Controller {
  /**
   * 获取凭证记录
   * @return {Promise<void>}
   */
  async findAgentCredentialBybid() {
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    try {
      const result = await ctx.service.agentCertificateRecord.getAgentCredentialBybid(data.bid);
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

  /**
   * 新增凭证记录
   * @return {Promise<void>}
   */
  async syncCredential() {
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    try {
      const result = await ctx.service.agentCertificateRecord.addAgentCertificateRecord(data);
      res = {
        code: 200,
        data: result ? '添加成功' : '添加失败',
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

  /**
   * 修改凭证记录
   */
  async updateAgentCredential() {
    let res = {};
    const { ctx } = this;
    const data = ctx.request.body;
    console.log('data: ', data);
    const result = await ctx.service.agentCertificateRecord.updateAgentCredential(data);
    res = {
      code: 200,
      data: result,
      msg: 'success',
    };
    ctx.body = res;
  }
}

module.exports = agentCertificateRecordController;

