import Ed25519VerificationKey2020 from './Ed25519VerificationKey2020.js';
import PluginInterface from '../../tool/plugin-interface.js'
class KeyManager extends PluginInterface {
    async Generate({seed, ...keyPairOptions} = {}) {
        let ldKeyPair;
        let error;
        try {
            ldKeyPair = await Ed25519VerificationKey2020.generate({seed, ...keyPairOptions})
        } catch(e) {
            error = e;
        }
        return ldKeyPair
    }
    // Export({publicKey = false, privateKey = false, includeContext = false } = {}) {
    //     return Ed25519VerificationKey2020.export({publicKey: publicKey, privateKey: privateKey, includeContext: includeContext})
    // }
    // async Singer() {
    //     let singerResult = await Ed25519VerificationKey2020.signer()
    //     console.log(singerResult)
    //     return singerResult
    // }
    //
    // async Verifier() {
    //     let verifierResult = Ed25519VerificationKey2020.verifier()
    //     console.log(verifierResult)
    //     return verifierResult
    // }
}
export default KeyManager

