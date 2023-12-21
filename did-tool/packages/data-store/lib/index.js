import { didStore } from './didStore.js';
import { keyStoreManager } from './keyStoreManager.js';
import PluginInterface from 'tool/plugin-interface.js';

export class DidStore extends PluginInterface {
    static async ImportDID(jsonData) {
        return await didStore.importDID({ jsonData });
    }
    static async GetDID( did ) {
        return await didStore.getDID({ did });
    }
    static async UpdateDID(jsonData) {
        return await didStore.updateDID({ jsonData });
    }
    static async DeleteDID(did) {
        return await didStore.deleteDID({ did });
    }
    static async ListDIDs(pageStart, pageSize) {
        return await didStore.listDIDs({ pageStart, pageSize });
    }
}
export class KeyStoreManager extends PluginInterface {
    static async ImportKey(jsonData, password) {
        return keyStoreManager.importKey({ jsonData, password });
    }
    static async GetKey(kid, password) {
        return keyStoreManager.getKey({kid, password});
    }
    static async UpdateKey(jsonData, password) {
        return keyStoreManager.updateKey({ jsonData, password });
    }
    static async DeleteKey(kid) {
        return keyStoreManager.deleteKey({ kid });
    }
    static async ListKeys( pageStart, pageSize) {
        return keyStoreManager.listKeys({ pageStart, pageSize });
    }
}
export default {DidStore, KeyStoreManager}
