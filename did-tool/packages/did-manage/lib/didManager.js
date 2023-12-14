const { importDID, updateDID, getDID, deleteDID, listDIDs } = require('../../data-store/lib/didStore.js');


async function formatJson(jsonData) {
  const dateTimeString = new Date().toISOString().slice(0, -1) + 'Z';
    console.log(dateTimeString);
    const didDocument = {
      "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
      ],
      id: jsonData.did,
      verificationMethod: jsonData.keys,
      authentication: jsonData.authentication,
      extension: jsonData.extension,
      service: jsonData.service,
      created: dateTimeString,
      updated: dateTimeString,
      proof: jsonData.proof
    };
    return didDocument;
}

//创建
async function didManagerCreate() {

  try {
    const jsonData = {
      "@context": [
        "https://www.w3.org/ns/did/v1",
        "https://w3id.org/security/suites/ed25519-2020/v1"
      ],
      "id": "did:example:efYGggWARD5GN5TMmMcxm7XRa9DJXRLPWRETLYNOP",
      "verificationMethod": [{
        "id": "did:example:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C",
        "type": "Ed25519VerificationKey2020",
        "controller": "did:example:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE",
        "publicKeyMultibase": "z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C"
      }],
      "authentication": [
        "did:example:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C"
      ],
      "extension": {
        "recovery": ["did:example:efnVUgqQFfYeu97ABf6sGm3WFtVXHZB2#key-2"],
        "ttl": 86400,
        "delegateSign": {
          "signer": "did:example:efJgt44mNDewKK1VEN454R17cjso3mSG#key-1",
          "signatureValue": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19"
        },
        "type": 206,
        "attributes": [{
          "key": "contract",
          "desc": "智能合约地址",
          "encrypt": "false",
          "format": "text",
          "value": "did:example:efJgt44mNDewKK1VEN454R17cjso3mSG"
        }]
      },
      "service": [{
        "id": "did:example:ef24NBA7au48UTZrUNRHj2p3bnRzF3YCH#resolve",
        "type": "DIDResolver",
        "serviceEndpoint": "www.caict.cn"
      }],
      "created": "2021-05-10T06:23:38Z",
      "updated": "2021-05-10T06:23:38Z",
      "proof": {
        "creator": "did:example:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C",
        "signatureValue": "9E07CD62FE6CE0A843497EBD045C0AE9FD6E1845414D0ED251622C66D9CC927CC21DB9C09DFF628DC042FCBB7D8B2B4901E7DA9774C20065202B76D4B1C15900"
      }
    };
    return {
      errorCode: 0,
      message: 'SUCCESS',
      data: {
        didDocument: jsonData
      }
    };

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  }
}

//保存
async function didManagerImport(jsonData) {

  try {
    
    const didDocument = formatJson(jsonData);
    const saveDidDocument = importDID(didDocument);
    return saveDidDocument;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}

//修改
async function didManagerUpdate(jsonData) {

  try {
    const didDocument = formatJson(jsonData);
    const updateDidDocument = updateDID(didDocument)
    return updateDidDocument;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}


//删除
async function didManagerDelete(did) {

  try {
    const deleteDidDocument = deleteDID(did)
    return deleteDidDocument;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}

//指定 DID 添加一个新的密钥
async function didManageraddKey(did,id) {

  try {
    const didDocumentResult = getDID(did)
    let didDocument = (await didDocumentResult).data.didDocument;
    didDocument.authentication.push(id)
    const updateDidDocument = updateDID(didDocument)
    return updateDidDocument;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}

//指定 DID 移除一个新的密钥
async function didManagerRemoveKey(did,id) {

  try {
    const didDocumentResult = getDID(did)
    let didDocument = (await didDocumentResult).data.didDocument;
    let authentication = didDocument.authentication
    const authenticationRemove = authentication.filter(item => item !== id);
    didDocument.authentication = authenticationRemove;
    const updateDidDocument = updateDID(didDocument)
    return updateDidDocument;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}

//查询指定 DID 的 DID 文档
async function didManagerFind(did) {

  try {
    
    const didDocumentResult = getDID(did)

    return didDocumentResult;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}

//指定 DID 添加一个service
async function didManagerAddService(did, jsonData) {

  try {
    const didDocumentResult = getDID(did)
    let didDocument = (await didDocumentResult).data.didDocument;
    didDocument.service.push(jsonData)
    const updateDidDocument = updateDID(didDocument)
    return updateDidDocument;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}

//指定 DID 添加一个service
async function didManagerRemoveService(did, jsonData) {

  try {
    
    const didDocumentResult = getDID(did)
    let didDocument = (await didDocumentResult).data.didDocument;
    let service = didDocument.service
    const serviceRemove = service.filter(item => item.id !== id);
    didDocument.service = serviceRemove;
    const updateDidDocument = updateDID(didDocument)
    return updateDidDocument;

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } 
}
// export { importDID, updateDID, getDID, deleteDID, listDIDs };

module.exports = { didManagerCreate, didManagerImport, didManagerUpdate, didManagerDelete, didManageraddKey, didManagerRemoveKey, didManagerFind, didManagerAddService, didManagerRemoveService };

