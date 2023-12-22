// index.js or any other entry point
import MainApplication from '../main-application.js';
import KeyManager from 'key-manager/lib/index.js';
import DidStore from 'data-store/lib/index.js';
import chai from "chai";
const should = chai.should();
const {expect} = chai;
import {seed} from "key-manager/lib/_tests_/mock-data.js";

const mainApp = new MainApplication();
const km = new KeyManager()
const ds = new DidStore()
mainApp.registerPlugin(km);
mainApp.registerPlugin(ds);
describe('generate', () => {
    it('should generate a key pair', async () => {
        const generateResult1 = await mainApp.executeAllPluginsMethods(km, 'Generate');
        console.log('generateResult1:', generateResult1)
    });
    it('should generate the same key from the same seed', async () => {
        const seed = new Uint8Array(32);
        const generateResult2 = await mainApp.executeAllPluginsMethods(km, 'Generate', {seed});
        console.log('generateResult2:', generateResult2)
    });
});

describe('export', () => {
    it('export', async () => {
        const seedBytes = (new TextEncoder()).encode(seed).slice(0, 32);
        const keyPair = await mainApp.executeAllPluginsMethods(km, 'Generate', {seed:seedBytes,controller: 'did:example:1234'});
        console.log('keyPair:', keyPair);
        const exported = await keyPair.export({
          publicKey: true, privateKey: true
        });
        console.log('exported:', exported);
    });
});

describe('singer', () => {
    it('singer', async () => {
        const seedBytes = (new TextEncoder()).encode(seed).slice(0, 32);
        const keyPair = await mainApp.executeAllPluginsMethods(km, 'Generate', {seed:seedBytes,controller: 'did:example:1234'});
        console.log('keyPair:', keyPair);
        const data = (new TextEncoder()).encode('test data goes here');
        const signatureBytes2020 = await keyPair.signer().sign({data});
        console.log('signatureBytes2020:', signatureBytes2020);
        const verifyResult =  await keyPair.verifier().verify({data, signature: signatureBytes2020})
        console.log('verifyResult:', verifyResult);
    });
});

describe('didStore Test', () => {
    // 正常JSON数据
    const jsonData = {
        "@context": [
            "https://www.w3.org/ns/did/v1",
            "https://w3id.org/security/suites/ed25519-2020/v1"
        ],
        "id": "did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRLPWRETLYC",
        "verificationMethod": [{
            "id": "did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C",
            "type": "Ed25519VerificationKey2020",
            "controller": "did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE",
            "publicKeyMultibase": "z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C"
        }],
        "authentication": [
            "did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C"
        ],
        "extension": {
            "recovery": ["did:bid:efnVUgqQFfYeu97ABf6sGm3WFtVXHZB2#key-2"],
            "ttl": 86400,
            "delegateSign": {
                "signer": "did:bid:efJgt44mNDewKK1VEN454R17cjso3mSG#key-1",
                "signatureValue": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19"
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
        "service": [{
            "id": "did:bid:ef24NBA7au48UTZrUNRHj2p3bnRzF3YCH#resolve",
            "type": "DIDResolver",
            "serviceEndpoint": "www.caict.cn"
        }],
        "created": "2021-05-10T06:23:38Z",
        "updated": "2021-05-10T06:23:38Z",
        "proof": {
            "creator": "did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRLE#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C",
            "signatureValue": "9E07CD62FE6CE0A843497EBD045C0AE9FD6E1845414D0ED251622C66D9CC927CC21DB9C09DFF628DC042FCBB7D8B2B4901E7DA9774C20065202B76D4B1C15900"
        }
    };
    // 错误JSON数据
    const jsonDataError = {
        "@context": [
            "https://www.w3.org/ns/did/v1",
            "https://w3id.org/security/suites/ed25519-2020/v1"
        ],
        "id": "did:bid:efYGggWARD5GN5TMmMcxm7XRa9DJXRLPWRETLYH",
        "verificationMethod": [],
        "authentication": [],
        "extension": {},
        "service": [],
        "created": "2021-05-10T06:23:38Z",
        "updated": "2021-05-10T06:23:38Z",
        "proof": {}
    };
    it('save a DidDocument to the database', async () => {
        // 调用保存函数
        const saveDidDocument = await mainApp.executeAllPluginsMethods(ds, 'ImportDID', {jsonData});
        expect(saveDidDocument.errorCode).to.equal(0);
    });
});



