import { didManager } from './didManager.js';
import PluginInterface from '../../tool/plugin-interface.mjs';

export class DidManager extends PluginInterface {
    static async DidManagerCreate() {
        return await didManager.didManagerCreate();
    }
    static async DidManagerImport({ jsonData } = {}) {
        return await didManager.didManagerImport(jsonData );
    }
    DidManagerUpdate({ jsonData } = {}) {
        return didManager.didManagerUpdate({ jsonData });
    }
    DidManagerDelete({ bid } = {}) {
        return didManager.didManagerDelete({ bid });
    }
    DidManageraddKey({ did,id } = {}) {
        return didManager.didManageraddKey({ did,id });
    }
    DidManagerRemoveKey({ did,id } = {}) {
        return didManager.didManagerRemoveKey({ did,id });
    }
    DidManagerFind({ bid } = {}) {
        return didManager.didManagerFind({ bid });
    }
    DidManagerAddService({ bid, jsonData } = {}) {
        return didManager.didManagerAddService({ bid, jsonData });
    }
    DidManagerRemoveService({ bid, id } = {}) {
        return didManager.didManagerRemoveService({ bid, id });
    }
}

export default DidManager
