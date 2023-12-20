import PluginInterface from './plugin-interface.mjs';

class MainApplication {
  constructor() {
    this.plugins = [];
  }

  registerPlugin(plugin) {
    if (!(plugin instanceof PluginInterface)) {
      throw new Error("Invalid plugin. Must be an instance of PluginInterface");
    }

    this.plugins.push(plugin);
  }

  executeAllPluginsMethods(plugin, methodName, ...params) {
    if (this.plugins.some(item => JSON.stringify(plugin) === JSON.stringify(item))) {
      plugin.executeMethod(methodName, ...params);
    } else {
      console.error(`plugin not registerd`);
    }
  }
}

export default MainApplication;