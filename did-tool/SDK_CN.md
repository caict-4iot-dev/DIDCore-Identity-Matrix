# 1.DID-TOOL使用说明

​		本节详细说明DID-TOOL常用接口文档。

## 1.1 DID-TOOL概述

### 1.1.1 架构介绍

+ tool： 项目集成组件，在此模块中可以通过插件方式集成其他三个业务组件并调用各自的方法。

+ key-manager： 密钥管理组件，提供密钥的生成、导出、签名和验签功能。

+ data-store： 

+ did-manager： 


## 2 tool
使用方式（以集成key-manager为例），具体执行详见tool/test/tooltest.spec.js
```javascript
import MainApplication from '../main-application.js';
import KeyManager from 'key-manager/lib/index.js';

const mainApp = new MainApplication(); // 生成插件容器
const km = new KeyManager() // 实体化插件
mainApp.registerPlugin(km); // 使用容器注册插件

const generateResult1 = await mainApp.executeAllPluginsMethods(km, 'Generate'); // 执行KeyManager中的Generate方法
console.log('generateResult1:', generateResult1)
  ```
## 3 key-manager
### 3.1 generate
生成Ed25519VerificationKey2020
```javascript
//默认生成
Ed25519VerificationKey2020.generate();
//自定义seed
Ed25519VerificationKey2020.generate({seed})
//自定义seed ,controller
const keyPair = await Ed25519VerificationKey2020.generate({
            seed: seedBytes, controller: 'did:example:1234'
        });
//自定义publicKeyMultibase ,controller
const keyPair = new Ed25519VerificationKey2020(
        {controller, publicKeyMultibase});
```

响应示例
```javascript
Ed25519VerificationKey2020 
{
  id: undefined,
  controller: undefined,
  revoked: undefined,
  type: 'Ed25519VerificationKey2020',
  publicKeyMultibase: 'z6MkvCCw9XG7W5vEh762pJctYAVhQ8tXdUhJhoU3j2FTNAhi',
  privateKeyMultibase: 'zrv5BpzRf6rxf3upk5UpNpYx6KPYq6VwRo7SjX2b4xsVXdwTkdN7PNhSoB7p2kYzbKjPV35HqhQNcG9UjsLgZjCq8Va'
}
```

### 3.2 导出
```javascript
  const keyPair = await Ed25519VerificationKey2020.generate({
        id: 'did:ex:123#test-id'
      });
  const exported = await keyPair.export({publicKey: true});
  console.log('keyPair:',keyPair)
  console.log('exported:',exported)
```

响应
```javascript
keyPair: Ed25519VerificationKey2020 
{
  id: 'did:ex:123#test-id',
  controller: undefined,
  revoked: undefined,
  type: 'Ed25519VerificationKey2020',
  publicKeyMultibase: 'z6MkwKVEXrVDEENJfXzWhiNvuonhs3VeVRdPtR5qGdHgYgAi',
  privateKeyMultibase: 'zrv52vafmqqFuzgEDRazRet9CtGxFJ3D5myVctrhJQXTuVpHaTP9BRSjp7zaNza29F9RBz8191D7tJMC93kHwX1XeFg'
}
exported: {
  id: 'did:ex:123#test-id',
  type: 'Ed25519VerificationKey2020',
  publicKeyMultibase: 'z6MkwKVEXrVDEENJfXzWhiNvuonhs3VeVRdPtR5qGdHgYgAi'
}
```

### 3.3签名/验签
```javascript
 const {publicKeyMultibase} = mockKey;
 const controller = 'did:example:1234';

const keyPair = new Ed25519VerificationKey2020(
        {controller, publicKeyMultibase});

const signer = keyPair.signer();
const verifier = keyPair.verifier();
//签名
const data = stringToUint8Array('test 1234');
const signature = await signer.sign({data});
//验签
const result = await verifier.verify({data, signature});
```