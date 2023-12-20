
const { createVerifiableCredentialJwt } = require('did-jwt-vc')

async function generateJWT() {

    const issuer = {
      did: 'did:key:z6Mkk2U8pdcHkdzKVBtLmCYYPAAGmrZ93LUSTKDrVp9uQzYu',
      signer: (data) => {
        // 实现你的签名逻辑
        // 返回签名结果
      },
    };

    const vcPayload = {
        exp: 1702745280,
        vc: {
          '@context': ['https://www.w3.org/2018/credentials/v1'],
          type: ['VerifiableCredential'],
          credentialSubject: {
            firstName: '郭',
            lastName: '世杰',
            email: '949552983@qq.com',
            type: 'Sphereon Guest',
            id: ''
          }
        },
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiableCredential'],
        expirationDate: '2023-12-20T15:22:20.383Z',
        credentialSubject: {
          firstName: '郭',
          lastName: '世杰',
          email: '949552983@qq.com',
          type: 'Sphereon Guest',
          id: ''
        },
        issuer: 'did:key:z6Mkk2U8pdcHkdzKVBtLmCYYPAAGmrZ93LUSTKDrVp9uQzYu',
        issuanceDate: '2023-12-18T15:22:20.383Z',
        sub: ''
    };

    const vcJwt = await createVerifiableCredentialJwt(vcPayload, issuer);

    return vcJwt
}

module.exports = { generateJWT }