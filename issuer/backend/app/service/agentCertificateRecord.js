const Service = require('egg').Service;

class agentCertificateRecordService extends Service {
  // 创建一个异步函数来对数据库进行操作，这里的函数名必须和controller里面请求的位置的名字一致
  async addAgentCertificateRecord(params) {
    try {
      // const params = id ? { id } : {};
      const result = await this.app.mysql.insert('agent_certificate_record', params);
      const insertSuccess = result.affectedRows === 1;
      if (insertSuccess) {
        return result;
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getAgentCredentialBybid(bid) {
    try {
      const params = bid ? { created_Bid: bid } : {};
      console.log('params', params);
      const result = await this.app.mysql.select('agent_certificate_record', {
        where: params,
        orders: [[ 'created_time', 'DESC' ]],
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async updateAgentCredential(params) {
    try {
      return await this.app.mysql.update('agent_certificate_record', params);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = agentCertificateRecordService;
