const { didManagerCreate, didManagerImport, didManagerUpdate, didManagerDelete, didManageraddKey, didManagerRemoveKey, didManagerFind, didManagerAddService, didManagerRemoveService } = require('../didManager.js');

describe('didStore Test', () => {


  // 正常JSON数据
  const jsonData = {
    "did": "did:fake:receiverWithMediation4",
    "keys": [
      {
        "type": "Ed25519",
        "kid": "didcomm-receiverWithMediation2Key-1",
        "publicKeyHex": "b162e405b6485eff8a57932429b192ec4de13c06813e9028a7cdadf0e2703636",
        "privateKeyHex": "19ed9b6949cfd0f9a57e30f0927839a985fa699491886ebcdda6a954d869732ab162e405b6485eff8a57932429b192ec4de13c06813e9028a7cdadf0e2703636"
      }
    ],
    "authentication": [
        "did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C"
    ],
    "extension": {
        "recovery": ["did:bid:efnVUgqQFfYeu97ABf6sGm3WFtVXHZB2#key-2"],
        "ttl": 86400,
        "delegateSign ": {
            "signer": "did:bid:efJgt44mNDewKK1VEN454R17cjso3mSG#key-1",
            "signatureValue":"eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19"
        },
        "type": 206,
        "attributes": [{
            "key": "contract",
            "desc": "智能合约地址",
            "encrypt": "false",
            "format": "text",
            "value": "did:bid:efJgt44mNDewKK1VEN454R17cjso3mSG"
        }]
    },
    "services": [
      {
        "id": "msg4",
        "type": "DIDCommMessaging",
        "serviceEndpoint": [
          {
            "uri": "http://localhost:3002/messaging",
            "routingKeys": [
              "${mediator2.did}#${mediator2.keys[0].kid}",
              "${mediator.did}#${mediator.keys[0].kid}"
            ]
          }
        ]
      }
    ],
    "provider": "did:fake"
  };

  
  test('didManagerCreate test', async () => {

    // 调用保存函数
    const didDocumentCreate = await didManagerCreate(jsonData);
    expect(didDocumentCreate.errorCode).toEqual(0);
  });

  test('save a DidDocument', async () => {
    // 调用保存函数
    const saveDidDocument = await didManagerImport(jsonData);
    expect(saveDidDocument.errorCode).toEqual(0);

  });

  test('update a DidDocument', async () => {

    jsonData.services.id = "did:fake:receiverWithMediation2";
    // 调用修改函数
    const saveDidDocument = await didManagerUpdate(jsonData);
    expect(saveDidDocument.errorCode).toEqual(0);

  });

  test('didManageraddKey test', async () => {

    const result = await didManageraddKey(jsonData.did,"did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRPP#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C")
    // 断言
    expect(result.errorCode).toEqual(0);

  });

  test('didManagerRemoveKey test', async () => {


    const result = await didManagerRemoveKey(jsonData.did,jsonData.extension[0])
    // 断言
    expect(result.errorCode).toEqual(0);

  });

  test('didManagerAddService test', async () => {

    const serviceData = {
      "id": "msg4asdsadsdsa",
      "type": "DIDCommMessaging",
      "serviceEndpoint": [
        {
          "uri": "http://localhost:3002/messaging",
          "routingKeys": [
            "${mediator2.did}#${mediator2.keys[0].kid}",
            "${mediator.did}#${mediator.keys[0].kid}"
          ]
        }
      ]
    }

    const result = await didManagerAddService(jsonData.did,serviceData)
    // 断言
    expect(result.errorCode).toEqual(0);

  });


  test('didManagerRemoveService test', async () => {

    const result = await didManagerRemoveService(jsonData.did,"did:fake:receiverWithMediation2")
    // 断言
    expect(result.errorCode).toEqual(0);

  });

  test('didManagerFind test', async () => {

    const result = await didManagerFind(jsonData.did)
    // 断言
    expect(result.errorCode).toEqual(0);

  });

  test('delete didManagerDelete', async () => {

    // 从数据库中检索保存的 DidDocument
    const result = await didManagerDelete(jsonData.did)
    // 断言
    expect(result.errorCode).toEqual(0);

  });

});
