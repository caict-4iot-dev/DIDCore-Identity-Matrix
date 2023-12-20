import { didStore } from './didStore.js';
// import { keyStoreManager } from './keyStoreManager.js';
import PluginInterface from '../../tool/plugin-interface.mjs';

export class DidStore extends PluginInterface {
    static async ImportDID(jsonData) {
        console.log("jsonData:", jsonData)
        let k;
        k = await didStore.importDID({ jsonData });
        return k
    }
    GetDID({ did } = {}) {
        return didStore.getDID({ did });
    }
    UpdateDID({ jsonData } = {}) {
        return didStore.updateDID({ jsonData });
    }
    DeleteDID({ bid } = {}) {
        return didStore.deleteDID({ bid });
    }
    ListDIDs({ pageStart, pageSize } = {}) {
        return didStore.listDIDs({ pageStart, pageSize });
    }
}
// export class KeyStoreManager extends PluginInterface {
//     ImportKey({ jsonData, password } = {}) {
//         return keyStoreManager.importKey({ jsonData, password });
//     }
//     GetKey({kid, password} = {}) {
//         return keyStoreManager.getKey({kid, password});
//     }
//     UpdateKey({ jsonData, password } = {}) {
//         return keyStoreManager.updateKey({ jsonData, password });
//     }
//     DeleteKey({ kid } = {}) {
//         return keyStoreManager.deleteKey({ kid });
//     }
//     ListKeys({ pageStart, pageSize } = {}) {
//         return keyStoreManager.listKeys({ pageStart, pageSize });
//     }
// }
export default DidStore
