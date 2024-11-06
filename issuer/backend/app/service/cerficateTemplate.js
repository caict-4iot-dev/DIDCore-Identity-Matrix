const Service = require('egg').Service;

class certificateTemplateService extends Service {
  // 创建一个异步函数来对数据库进行操作，这里的函数名必须和controller里面请求的位置的名字一致
  async getCertificateTemplate(id) {
    try {
      const params = id ? { id } : {};
      console.log('params', params);
      const result = await this.app.mysql.select('certificatetemplate', params);
      console.log('resultresult', result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = certificateTemplateService;
