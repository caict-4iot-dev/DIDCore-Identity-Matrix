// index.js or any other entry point
import MainApplication from '../main-application.js';
import KeyManager from '../../key-manager/lib/index.js';
import DidStore from '../../data-store/lib/index.js';
import {seed} from "../../key-manager/lib/_tests_/mock-data.js";
import Ed25519VerificationKey2020 from "../../key-manager/lib/Ed25519VerificationKey2020.js";

const mainApp = new MainApplication();
const km = new KeyManager()
const ds = new DidStore()
mainApp.registerPlugin(km);
mainApp.registerPlugin(ds);
// test generate
// const generateResult1 = await mainApp.executeAllPluginsMethods(km, 'Generate');
// console.log('generateResult1:', generateResult1)
// const seed = new Uint8Array(32);
// const generateResult2 = await mainApp.executeAllPluginsMethods(km, 'Generate', {seed});
// console.log('generateResult2:', generateResult2)

//test export
// const seedBytes = (new TextEncoder()).encode(seed).slice(0, 32);
// const keyPair = await mainApp.executeAllPluginsMethods(km, 'Generate', {seed:seedBytes,controller: 'did:example:1234'});
// console.log('keyPair:', keyPair);
// const exported = await keyPair.export({
//     publicKey: true, privateKey: true
// });
// console.log('exported:', exported);

//test singer
const seedBytes = (new TextEncoder()).encode(seed).slice(0, 32);
const keyPair = await mainApp.executeAllPluginsMethods(km, 'Generate', {seed:seedBytes,controller: 'did:example:1234'});
console.log('keyPair:', keyPair);
const data = (new TextEncoder()).encode('test data goes here');
const signatureBytes2020 = await keyPair.signer().sign({data});
console.log('signatureBytes2020:', signatureBytes2020);
const verifyResult =  await keyPair.verifier().verify({data, signature: signatureBytes2020})
console.log('verifyResult:', verifyResult);

// test did-store
// const dsr = await mainApp.executeAllPluginsMethods(ds, 'ImportDID', {});
// console.log(dsr)



