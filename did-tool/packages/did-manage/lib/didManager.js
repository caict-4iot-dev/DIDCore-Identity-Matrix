import {DidStore} from 'data-store/lib/index.js';

export class didManager {

  static async formatJson(jsonData) {
    const dateTimeString = new Date().toISOString().slice(0, -1) + 'Z';
    const didDocument = {};
    didDocument['@context'] = [
      "https://www.w3.org/ns/did/v1",
      "https://w3id.org/security/suites/ed25519-2020/v1"
    ];
    didDocument.id = jsonData.did;
    didDocument.verificationMethod = jsonData.keys;
    didDocument.authentication = jsonData.authentication;
    didDocument.extension = jsonData.extension;
    didDocument.service = jsonData.services?jsonData.services:[];
    didDocument.created = dateTimeString;
    didDocument.updated = dateTimeString;
    didDocument.proof = jsonData.proof?jsonData.proof:{};

    return didDocument;
  }

//创建
  static async didManagerCreate() {

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
  static async didManagerImport({jsonData} = {}) {

    try {

      const didDocument = await this.formatJson(jsonData);
      const saveDidDocument = DidStore.ImportDID(didDocument);
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
  static async didManagerUpdate({jsonData} = {}) {

    try {
      const didDocument = await this.formatJson(jsonData);
      const updateDidDocument = DidStore.UpdateDID(didDocument)
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
  static async didManagerDelete({did} = {}) {

    try {
      const deleteDidDocument = DidStore.DeleteDID(did)
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
  static async didManageraddKey({did, id} = {}) {

    try {
      const didDocumentResult = await DidStore.GetDID(did)
      let didDocument = didDocumentResult.data.didDocument;
      didDocument.authentication.push(id)
      const updateDidDocument = await DidStore.UpdateDID(didDocument)
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
  static async didManagerRemoveKey({did, id} = {}) {

    try {
      const didDocumentResult = DidStore.GetDID(did)
      let didDocument = (await didDocumentResult).data.didDocument;
      let authentication = didDocument.authentication
      const authenticationRemove = authentication.filter(item => item !== id);
      didDocument.authentication = authenticationRemove;
      const updateDidDocument = DidStore.UpdateDID(didDocument)
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
  static async didManagerFind({did} = {}) {

    try {

      const didDocumentResult = DidStore.GetDID(did)

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
  static async didManagerAddService({did, jsonData} = {}) {

    try {
      const didDocumentResult = DidStore.GetDID(did)
      let didDocument = (await didDocumentResult).data.didDocument;
      didDocument.service.push(jsonData)
      const updateDidDocument = DidStore.UpdateDID(didDocument)
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
  static async didManagerRemoveService({did, id} = {}) {

    try {

      const didDocumentResult = DidStore.GetDID(did)
      let didDocument = (await didDocumentResult).data.didDocument;
      let service = didDocument.service
      const serviceRemove = service.filter(item => item.id !== id);
      didDocument.service = serviceRemove;
      const updateDidDocument = DidStore.UpdateDID(didDocument)
      return updateDidDocument;

    } catch (error) {
      console.log('Error connecting to the database:', error);

      throw {
        errorCode: 400000,
        message: 'System error',
      };

    }
  }
}

