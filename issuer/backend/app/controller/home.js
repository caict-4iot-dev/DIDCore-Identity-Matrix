const { Controller } = require('egg');
const sjcl = require('brdc-sjcl');
const config = require('../config');

class HomeController extends Controller {
  /**
   * 生成文档模版
   * @return {Promise<void>}
   */
  async generateDocumentTemplate() {
    const { agent } = await import('veramo-simple');
    const { ctx } = this;
    let res = {};
    let result;
    const data = ctx.request.body;
    const params = {};
    if (data.bid) {
      params.bid = data.bid;
      params.publickey = data.publickey;
      params.privateKey = data.privateKey;
    }
    try {
      // 生成文档模板
      result = await agent.generateDocumentTemplate(params);
      if (result.priKey) {
        result.document.extension.agent = '';
      } else if (!result?.priKey) {
        result.extension.agent = '';
      }
      if (data.proofFlag) {
        // 生成签名字段
        result = await agent.generateDocumentProof({
          document: result?.document || result,
          privateKey: data.privateKey,
        });
      }
      if (result?.document) {
        res = {
          code: 200,
          data: result,
          msg: 'success',
        };
      } else {
        res = {
          code: 500,
          data: result,
          msg: 'success',
        };
      }
    } catch (e) {
      res = {
        code: 500,
        data: e,
        msg: 'success',
      };
    }
    ctx.body = res;
  }


  getContractInvokeOperation(privateKey, document) {
    return {
      privateKey, // 获取秘钥
      ceilLedgerSeq: '',
      feeLimit: '',
      gasPrice: '',
      remarks: 'createIdentifier',
      bidDocument: JSON.stringify({ document }),
    };
  }

  /**
   * 新增文档
   * @return {Promise<void>}
   */
  async addBidDocumentRecord() {
    const { agent } = await import('veramo-simple');
    const { ctx } = this;
    let res = {};
    let sqlRes;
    const data = ctx.request.body;
    // 把document 存入数据库中
    const addParams = {
      bid: data.bid,
      document: data.document,
    };
    const params = {
      provider: 'did:bid',
      kms: 'local',
      alias: data.alias || 'test',
      bid: data.bid,
      privateKey: data.privateKey,
    };
    const contractInvokeOperation = this.getContractInvokeOperation(data.privateKey, data.document);
    console.log('contractInvokeOperation', contractInvokeOperation);
    try {
      // // 上链
      const result = await agent.didManagerCreate({ ...params, document: contractInvokeOperation });
      console.log('88-result', result);
      sqlRes = await ctx.service.bidDocumentRecord.addBidDocumentRecord(addParams);
      console.log('sqlRes', sqlRes);
      res = {
        code: 200,
        data: sqlRes,
        msg: 'success',
      };
    } catch (e) {
      console.log('e', e);
      res = {
        code: 200,
        data: sqlRes,
        msg: 'success',
      };
    }
    ctx.body = res;
  }


  async getBidDocument() {
    const { ctx } = this;
    let res = {};
    let sqlRes;
    // const data = ctx.request.body;
    try {
      // // 上链
      // const result = await agent.didManagerCreate({ ...params, document: contractInvokeOperation });
      // console.log('88-result', result);
      // if (result) {
      // 数据库
      sqlRes = await ctx.service.bidDocumentRecord.getBidDocumentRecord({});
      console.log('sqlRes', sqlRes);
      // }
      res = {
        code: 200,
        data: sqlRes,
        msg: 'success',
      };
    } catch (e) {
      console.log('e', e);
      res = {
        code: 200,
        data: sqlRes,
        msg: 'success',
      };
    }
    ctx.body = res;
  }


  /**
   * 验证文档
   * @return {Promise<void>}
   */
  async validProof() {
    const { ctx } = this;
    const { agent } = await import('veramo-simple');
    let res = {};
    let result;
    const data = ctx.request.body;
    try {
      console.log('data1', data.document, typeof data.document);
      // console.log('json', JSON.parse(data.document));
      result = await agent.isValidProof(JSON.stringify({ document: data.document }));
      console.log('126-result', result);
      if (result) {
        res = {
          code: 200,
          data: result,
          msg: 'success',
        };
      } else {
        res = {
          code: 500,
          data: result,
          msg: 'success',
        };
      }
    } catch (e) {
      console.log('e', e);
      res = {
        code: 500,
        data: e,
        msg: 'success',
      };
    }
    ctx.body = res;
  }

  /**
   * 修改文档
   * @return {Promise<void>}
   */
  async updateBidDocumentRecord() {
    const { ctx } = this;
    let res = {};
    let sqlRes;
    const data = ctx.request.body;
    const params = {
      id: data.id,
      bid: data.bid,
      document: data.document,
    };
    // const contractInvokeOperation = this.getContractInvokeOperation(data.privateKey, data.document);
    // console.log('contractInvokeOperation', contractInvokeOperation);
    try {
      // // 上链
      // const resDoc = await agent.updateBidDocumentRecord(contractInvokeOperation);
      // console.log('resDoc', resDoc);
      // if (resDoc) {
      // 数据库更新
      sqlRes = await ctx.service.bidDocumentRecord.updateBidDocumentRecord(params);
      console.log('sqlRes', sqlRes);
      if (res) {
        res = {
          code: 200,
          data: sqlRes,
          msg: 'success',
        };
      } else {
        res = {
          code: 500,
          data: sqlRes,
          msg: 'success',
        };
      }
      // }
    } catch (e) {
      res = {
        code: 500,
        data: e,
        msg: 'success',
      };
    }
    ctx.body = res;
  }


  /**
   * 创建可验证的凭证
   * @return {Promise<void>}
   */
  async createCredential() {
    console.log('2');
    const { agent } = await import('veramo-simple');
    console.log('2');
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    // let insertId;
    try {
      // console.log('delres', delres);
      // 创建发证方bid
      // let identifier = await agent.didManagerCreate({ alias: data.bid + '12' });
      // let identifier = await agent.didManagerCreate({ alias: config.bid + '1233523', bid: config.bid });
    //   if (identifier === '该用户已存在') {
    //   const identifier = await agent.didManagerGetByAlias({ alias: config.bid + '1233523', bid: config.bid });
      // }
    //   console.log('identifier', identifier);
      // 将vc转16进制进行验签
      const blob = sjcl.codec.hex.fromBits(sjcl.codec.utf8String.toBits(data.message));
      // 验签
      console.log('agent', agent);
      const verifyRes = await agent.verify({ message: blob, signature: data.signData, publicKey: data.publicKey });
      console.log('verifyRes', verifyRes);
      console.log('JSON.parse(data.message).credentialSubject', JSON.parse(data.message).credentialSubject);
      // 创建凭证    identifier.did
      const verifiableCredential = await agent.createVerifiableCredential({
        credential: {
          issuer: { id: config.bid },
          '@context': [ 'https://www.w3.org/2018/credentials/v1', 'https://example.com/1/2/3' ],
          type: [ 'VerifiableCredential', 'Custom' ],
          issuanceDate: new Date().toISOString(),
          credentialSubject: JSON.parse(JSON.parse(data.message).credentialSubject),
        },
        proofFormat: 'jwt',
      });
      console.log('New verifiableCredential created', verifiableCredential);


      const agentParams = {
        credential_bid: config.bid,
        recordId: 1,
        certificate_vc: JSON.stringify(verifiableCredential),
        created_Bid: data.bid,
      };
      const addagentRes = await ctx.service.agentCertificateRecord.addAgentCertificateRecord(agentParams);
      console.log('addagentRes', addagentRes);

      // 添加申请凭证记录
      const params = {
        bid: config.bid,
        certificate_vc: JSON.stringify(verifiableCredential),
        public_Key: data.publicKey,
        created_Bid: data.bid,
        agentid: addagentRes.insertId,
      };
      const result = await ctx.service.certificateRecord.addCertificateRecord(params);
      //   const agentParams = {
      //     credential_bid: config.bid,
      //     recordId: result.insertId,
      //     certificate_vc: JSON.stringify(verifiableCredential),
      //     created_Bid: data.bid,
      //   };
      // insertId = result.insertId;
      // 同步到agent凭证表
      //   const addagentRes = await ctx.service.agentCertificateRecord.addAgentCertificateRecord(agentParams);

      console.log('result', result);
      res = {
        code: 200,
        data: { messageId: result.insertId },
        msg: 'success',
      };
    } catch (e) {
      console.log('e', e.Error, e);
      res = {
        code: 500,
        data: e,
        msg: 'success',
      };
    }
    ctx.body = res;
    // setTimeout(async () => {
    //   // 修改申请凭证状态(默认审核通过)
    //   const updateRes = await ctx.service.certificateRecord.updateCertificateRecord({
    //     id: insertId,
    //     status: 1,
    //   });
    //   console.log('updateRes', updateRes);
    // }, 5000);
  }

  /**
   * 验证凭证
   * @return {Promise<void>}
   */
  async verCredential() {
    // const { agent } = await import('veramo-simple');
    const keypair = await import('@caict/bif-encryption');
    const { ctx } = this;
    let res = {};
    const data = ctx.request.body;
    console.log('data', data);
    try {
      // 解析bid获取公钥
      const params = {
        created_Bid: data.bid,
      };
      const verResult = await ctx.service.certificateRecord.getCertificateRecord(params);
      console.log('verResult', verResult);
      // 将vc转16进制进行验签
      const blob = sjcl.codec.hex.fromBits(sjcl.codec.utf8String.toBits(data.message));
      // 验签
      console.log('blob', blob, data, verResult);
      const verifyRes = keypair.verify(blob, data.signData, verResult.public_key);
      console.log('verifyRes', verifyRes);
      if (verifyRes) {
        const params = {
          holderBid: data.bid,
          vc: data.message,
          status: 0,
          agentid: data.verid,
        };
        console.log('params', params);
        const result = await ctx.service.verifierCredential.addVerifierCredential(params);
        // // 验证VC
        // const result = await agent.verifyCredential({ credential: JSON.parse(data.message) });
        console.log('New verifiableCredential', result);
        if (result) {
          res = {
            code: 200,
            data: { ...result, verBid: config.bid },
            msg: 'success',
          };
        } else {
          res = {
            code: 500,
            data: result,
            msg: 'error',
          };
        }
      } else {
        res = {
          code: 500,
          data: '签名验证失败',
          msg: 'error',
        };
      }
    } catch (e) {
      res = {
        code: 500,
        data: '签名验证失败',
        msg: e.Error,
      };
    }
    ctx.body = res;
  }
}

module.exports = HomeController;

