import { didStore } from './didStore.js';
import PluginInterface from 'tool/plugin-interface.js';

export class DidStore extends PluginInterface {
    static async ImportDID(jsonData) {
        return await didStore.importDID({ jsonData });
    }
    static async GetDID( did ) {
        return await didStore.getDID({ did });
    }
    static async UpdateDID({ jsonData } = {}) {
        return await didStore.updateDID({ jsonData });
    }
    static async DeleteDID({ bid } = {}) {
        return await didStore.deleteDID({ bid });
    }
    static async ListDIDs({ pageStart, pageSize } = {}) {
        return await didStore.listDIDs({ pageStart, pageSize });
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
