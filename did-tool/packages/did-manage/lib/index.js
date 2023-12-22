import { didManager } from './didManager.js';
import PluginInterface from 'tool/plugin-interface.js';

export class DidManager extends PluginInterface {
    static async DidManagerCreate() {
        return await didManager.didManagerCreate();
    }
    static async DidManagerImport( jsonData ) {
        return await didManager.didManagerImport({jsonData} );
    }
    static async DidManagerUpdate( jsonData ) {
        return await didManager.didManagerUpdate({ jsonData });
    }
    static async DidManagerDelete( did ) {
        return await didManager.didManagerDelete({ did });
    }
    static async DidManageraddKey( did,id ) {
        return await didManager.didManageraddKey({ did,id });
    }
    static async DidManagerRemoveKey( did,id ) {
        return await didManager.didManagerRemoveKey({ did,id });
    }
    static async DidManagerFind( did ) {
        return await didManager.didManagerFind({ did });
    }
    static async DidManagerAddService( did, jsonData ) {
        return await didManager.didManagerAddService({ did, jsonData });
    }
    static async DidManagerRemoveService( did, id ) {
        return await didManager.didManagerRemoveService({ did, id });
    }
}

export default {DidManager}
