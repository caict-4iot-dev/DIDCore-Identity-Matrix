/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {


  /**
       * built-in config
       * @type {Egg.EggAppConfig}
       **/
  const config = exports = {};

  config.cluster = {
    listen: {
      port: 7003, // 这里设置你想要的端口号
      hostname: '0.0.0.0', // 可选，默认是0.0.0.0
    },
  };
  config.cors = {
    origin: '*', // 允许所有的请求源
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      //   host: 'mysql',
      // 端口号
      port: '3307',
      // 用户名
      user: 'xty',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test',
    //   host: 'localhost',
    //   //   host: 'mysql',
    //   // 端口号
    //   port: '3306',
    //   // 用户名
    //   user: 'root',
    //   // 密码
    //   password: '123456',
    //   // 数据库名
    //   database: 'dp-test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1719296301034_8254';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
