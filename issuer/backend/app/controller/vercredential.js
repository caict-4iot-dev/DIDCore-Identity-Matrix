const { Controller } = require('egg');
// const config = require('../config');

class vercredentialController extends Controller {
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
    const result = await ctx.service.verifierCredential.addVerifierCredential(params);
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
    const result = await ctx.service.verifierCredential.getVerifierCredential(data.id);
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
    const params = {
      id: data.id,
      holderBid: data.holderBid,
      vc: data.vc,
      //   type: data.type,
      status: data.status,
    };
    // const verRes = await agent.verifyCredential({ credential: JSON.parse(data.vc) });
    // console.log('New verifiableCredential', verRes);
    const result = await ctx.service.verifierCredential.updateVerifierCredential(params);
    console.log('result: ', result);
    const sqlRes = await ctx.service.bidDocumentRecord.getBidDocumentRecord({ bid: data.holderBid });
    const agentUrl = JSON.parse(sqlRes.document).extension.agent;
    const agentParams = {
      id: data.agentid,
      ver_status: 1,
    };
    const agentRes = await ctx.curl(`${agentUrl}/updateAgentCredential`, {
      method: 'POST',
      data: agentParams,
    });
    res = {
      code: 200,
      data: agentRes,
      msg: 'success',
    };
    ctx.body = res;
  }
}

module.exports = vercredentialController;

