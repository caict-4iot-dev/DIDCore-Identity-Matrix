const Service = require('egg').Service;


class verifierCredentialService extends Service {
  // 创建一个异步函数来对数据库进行操作，这里的函数名必须和controller里面请求的位置的名字一致
  async addVerifierCredential(params) {
    try {
      const result = await this.app.mysql.insert('verifier_credential', params);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getVerifierCredential(id) {
    try {
      const params = id ? { id } : {};
      return await this.app.mysql.select('verifier_credential', {
        where: params,
        orders: [[ 'created_time', 'DESC' ]],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateVerifierCredential(params) {
    try {
      return await this.app.mysql.update('verifier_credential', params);
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
      return await this.app.mysql.delete('bid_document_record', params);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = verifierCredentialService;
