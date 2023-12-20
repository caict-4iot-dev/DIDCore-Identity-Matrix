
import {Ed25519VerificationKey2020} from './Ed25519VerificationKey2020.js';
import PluginInterface from '../../tool/plugin-interface.mjs'
export class KeyManager extends PluginInterface {
    Generate({seed, ...keyPairOptions} = {}) {
        return Ed25519VerificationKey2020.generate({seed, ...keyPairOptions})
    }
    Export({publicKey = false, privateKey = false, includeContext = false } = {}) {
         return Ed25519VerificationKey2020.export({publicKey: publicKey, privateKey: privateKey, includeContext: includeContext})
    }


}
