import PluginInterface from '../plugin-interface.js';

class Plugin1 extends PluginInterface {
    method1(param) {
        console.log(`Plugin1 executing method1... param is ${param}`);
        return 'hola'
    }

    method3() {
        console.log("Plugin1 executing method3...");
    }
}

export default Plugin1;