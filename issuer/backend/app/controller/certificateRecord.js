const { Controller } = require('egg');

class certificateRecordController extends Controller {
  /**
   * 获取凭证记录
   * @return {Promise<void>}
   */
  async getCertificateRecord() {
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    const params = {};
    if (data.bid) {
      params.bid = data.bid;
    }
    if (data.messageId) {
      params.id = data.messageId;
    }
    try {
      const result = await ctx.service.certificateRecord.getCertificateRecord(params);
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

  async updateCertificateRecord() {
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    try {
      const result = await ctx.service.certificateRecord.updateCertificateRecord(data);
      const sqlRes = await ctx.service.bidDocumentRecord.getBidDocumentRecord({ bid: data.holderBid });
      console.log('sqlRes: ', JSON.parse(sqlRes.document).extension.agent);
      const agentUrl = JSON.parse(sqlRes.document).extension.agent;
      const agentParams = {
        id: data.agentid,
        iss_status: 1,
      };
      const agentRes = await ctx.curl(`${agentUrl}/updateAgentCredential`, {
        method: 'POST',
        data: agentParams,
      });
      console.log('agentRes: ', agentRes);
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

module.exports = certificateRecordController;

