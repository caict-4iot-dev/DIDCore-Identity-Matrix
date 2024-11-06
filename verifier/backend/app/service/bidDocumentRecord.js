const Service = require('egg').Service;


class bidDocumentRecordService extends Service {
  // 创建一个异步函数来对数据库进行操作，这里的函数名必须和controller里面请求的位置的名字一致
  async addBidDocumentRecord(params) {
    try {
      console.log('params', params);
      const result = await this.app.mysql.insert('bid_document_record', params);
      console.log('resultresult', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getBidDocumentRecord(params) {
    try {
      console.log('params', params);
      const result = await this.app.mysql.get('bid_document_record', params);
      console.log('getCertificateRecordresultresult', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async updateBidDocumentRecord(params) {
    try {
      console.log('params', params);
      const result = await this.app.mysql.update('bid_document_record', params);
      console.log('getCertificateRecordresultresult', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBidDocumentRecord(params) {
    try {
      /**
       * params = {
       *   id: 1
       * }
       */
      console.log('params', params);
      const result = await this.app.mysql.delete('bid_document_record', params);
      console.log('getCertificateRecordresultresult', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = bidDocumentRecordService;
