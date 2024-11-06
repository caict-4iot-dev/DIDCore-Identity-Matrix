const { Controller } = require('egg');

class bidRecordController extends Controller {
  /**
   * 获取bid记录
   * @returns {Promise<void>}
   */
  async getBidDocumentRecord() {
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    let params = {
      id: data.id,
    };
    try {
      const result = await ctx.service.bidDocumentRecord.getBidDocumentRecord(params);
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

  async addBidDocumentRecord() {
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    let params = {};
    if (data.alias) {
      params.alias = data.alias;
    }
    if (data.bid) {
      params.bid = data.bid;
    }
    if (data.private_key) {
      params.private_key = data.private_key;
    }
    if (data.public_key) {
      params.public_key = data.public_key;
    }
    try {
      const result = await ctx.service.bidDocumentRecord.addBidDocumentRecord(data);
      console.log('result', result);
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

module.exports = bidRecordController;

