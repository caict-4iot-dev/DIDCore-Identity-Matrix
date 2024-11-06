const Service = require('egg').Service;


class certificateRecordService extends Service {
  // 创建一个异步函数来对数据库进行操作，这里的函数名必须和controller里面请求的位置的名字一致
  async addCertificateRecord(params) {
    try {
      const result = await this.app.mysql.insert('certificate_record', params);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async getCertificateRecord(params) {
    try {
      let result;
      if (params.id || params.created_Bid) {
        result = await this.app.mysql.get('certificate_record', params);
        return result;
      }
      result = await this.app.mysql.select('certificate_record', {
        where: params,
        orders: [[ 'created_time', 'DESC' ]],
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async updateCertificateRecord(params) {
    try {
      const result = await this.app.mysql.update('certificate_record', params);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = certificateRecordService;
