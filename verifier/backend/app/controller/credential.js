const { Controller } = require('egg');
// const config = require('../config');

class credentialController extends Controller {
  async addcredentialList() {
    // 接收参数
    let res = {};
    const { ctx } = this;
    const data = ctx.request.body;
    console.log('data: ', data);
    const params = {
      holderBid: data.bid,
      vc: data.vc,
      type: data.type,
      status: 0,
    };
    const result = await ctx.service.issuerCredential.addIssuerCredential(params);
    res = {
      code: 200,
      data: result,
      msg: 'success',
    };
    ctx.body = res;
  }
  async getcredentialList() {
    // 接收参数
    let res = {};
    const { ctx } = this;
    const data = ctx.request.body;
    console.log('data: ', data);
    const result = await ctx.service.issuerCredential.getIssuerCredential(data.id);
    res = {
      code: 200,
      data: result,
      msg: 'success',
    };
    ctx.body = res;
  }
  async updatecredentialList() {
    // 接收参数
    let res = {};
    const { ctx } = this;
    const data = ctx.request.body;
    console.log('data: ', data);
    // const params = {
    //   id: data.id,
    //   holderBid: data.bid,
    //   vc: data.vc,
    //   type: data.type,
    //   status: 0,
    // };
    const result = await ctx.service.certificateRecord.updateCertificateRecord({
      id: data.insertId,
      status: data.status,
    });
    console.log('result: ', result);
    // const sqlRes = await ctx.service.bidDocumentRecord.getBidDocumentRecord({ bid: data.bid });
    // console.log('sqlRes: ', JSON.parse(sqlRes.document).extension.agent);
    // const agentUrl = JSON.parse(sqlRes.document).extension.agent;
    const agentUrl = 'http://127.0.0.1:7001';
    const agentParams = {
      id: data.agentid,
      iss_status: data.status,
    };
    const agentRes = await ctx.curl(`${agentUrl}/updateAgentCredential`, {
      method: 'POST',
      data: agentParams,
    });
    res = {
      code: 200,
      data: result,
      msg: 'success',
    };
    ctx.body = res;
  }
}

module.exports = credentialController;

