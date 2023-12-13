// const { didManagerCreate, didManagerImport, didManagerUpdate, didManagerDelete, didManageraddKey, didManagerRemoveKey, didManagerFind, didManagerAddService, didManagerRemoveService } = require('../didManager.js');
const { didManagerCreate } = require('../didManager.js');

describe('didStore Test', () => {


  // 正常JSON数据
  const jsonData = {
    "did": "did:fake:receiverWithMediation2",
    "keys": [
      {
        "type": "Ed25519",
        "kid": "didcomm-receiverWithMediation2Key-1",
        "publicKeyHex": "b162e405b6485eff8a57932429b192ec4de13c06813e9028a7cdadf0e2703636",
        "privateKeyHex": "19ed9b6949cfd0f9a57e30f0927839a985fa699491886ebcdda6a954d869732ab162e405b6485eff8a57932429b192ec4de13c06813e9028a7cdadf0e2703636"
      }
    ],
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

  // test('save a DidDocument for Document format error', async () => {
    
  //   // 调用保存函数
  //   const saveDidDocument = await importDID(jsonDataError);
  //   expect(saveDidDocument.errorCode).toEqual(100002);

  // });

  // test('update a DidDocument to the database', async () => {

  //   jsonData.created = "2020-05-10T06:23:38Z";
  //   // 调用修改函数
  //   const saveDidDocument = await updateDID(jsonData);
  //   expect(saveDidDocument.errorCode).toEqual(0);

  //   // 从数据库中检索保存的 DidDocument
  //   const retrievedDidDocument = await getDID(jsonData.id)

  //   console.log('jsonData.created:', jsonData.created);
  //   console.log('retrievedDidDocument.data.created:', retrievedDidDocument.data.didDocument.created);
  //   // 断言检索到的 DidDocument 是否与保存的 DidDocument 一致
  //   expect(retrievedDidDocument.data.didDocument).toEqual(jsonData);

  // });

  // test('query DidDocument List', async () => {

  //   // 从数据库中检索保存的 DidDocument
  //   const retrievedDidDocument = await listDIDs()
  //   console.log('DidList:', retrievedDidDocument);
  //   // 断言
  //   expect(retrievedDidDocument.errorCode).toEqual(0);

  // });

  // test('delete DidDocument for BID', async () => {

  //   // 从数据库中检索保存的 DidDocument
  //   const retrievedDidDocument = await deleteDID(jsonData.id)
  //   // 断言
  //   expect(retrievedDidDocument.errorCode).toEqual(0);

  // });
  
  // test('update a DidDocument for the document does not exist error', async () => {

  //   // 调用修改函数
  //   const saveDidDocument = await updateDID(jsonData);
  //   // 断言
  //   expect(saveDidDocument.errorCode).toEqual(100003);

  // });

  // test('quert DidDocument for BID for the document does not exist error', async () => {

  //   // 从数据库中检索保存的 DidDocument
  //   const retrievedDidDocument = await getDID('did:bid:efYGggWARD5GN5TM')
  //   // 断言s
  //   expect(retrievedDidDocument.errorCode).toEqual(100003);

  // });
});
