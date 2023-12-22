const { getResolver } = require('ethr-did-resolver');
const { Resolver } = require('did-resolver');
const { verifyCredential } = require('did-jwt-vc');
const { generateJWT } = require('../../credential-w3c/lib/generateJWT')

async function checkJWT () {
  try {
    const providerConfig = {
      rpcUrl: 'https://dev.uniresolver.io/1.0/identifiers',
      did: 'did:key:z6Mkk2U8pdcHkdzKVBtLmCYYPAAGmrZ93LUSTKDrVp9uQzYu'
    }
    // url :https://dev.uniresolver.io/1.0/identifiers/{did}
    // example:https://dev.uniresolver.io/1.0/identifiers/did:bid:ef214PmkhKndUcArDQPgD5J4fFVwqJFPt
    // url 为空，则调用did-manager 中查询接口，不为空则直接在线解析

    if (!providerConfig.rpcUrl) {
      // 调用调用did-manager 中查询接口
      return false
    }

    const resolver = new Resolver(getResolver(providerConfig));

    // const vcJWT = await generateJWT();

    // const verifiedJWT = await verifyCredential(vcJWT.data, resolver);

    return {
      errorCode: 0,
      data: resolver,
      message: 'success',
    };

  } catch (error) {
    return {
      errorCode: 100001,
      message: error
    };
  }

}

module.exports = { checkJWT }