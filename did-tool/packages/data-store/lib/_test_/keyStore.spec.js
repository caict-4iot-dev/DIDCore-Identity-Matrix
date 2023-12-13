const { importKey, updateKey, getKey, deleteKey, listKeys } = require('../keyStoreManager.js');

describe('keyStore Test', () => {


  // 正常JSON数据
  const jsonData = {
    "id": 'did:example:1234#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89M',
    "type": 'Ed25519VerificationKey2020',
    "controller": 'did:example:1234',
    "publicKeyMultibase": 'z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C',
    "privateKeyMultibase":'zrv1mHUXWkWUpThaapTt8tkxSotE1iSRRuPNarhs3vTn2z61hQESuKXG7zGQsePB7JHdjaCzPZmBkkqULLvoLHoD82a',
    "revoked": '2020-12-16T16:00:00Z'
  };

  // 错误JSON数据
  const jsonDataError = {
    "id": 'did:example:1234#z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89FS',
    "type": 'Ed25519VerificationKey2020',
    "controller": '',
    "publicKeyMultibase": 'z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C',
    "privateKeyMultibase":'zrv1mHUXWkWUpThaapTt8tkxSotE1iSRRuPNarhs3vTn2z61hQESuKXG7zGQsePB7JHdjaCzPZmBkkqULLvoLHoD82a',
    "revoked": '2020-12-16T16:00:00Z'
  };

  const password = "bif8888";
  
  test('save key to the database', async () => {

    // 调用保存函数
    const saveKey = await importKey(jsonData, password);
    expect(saveKey.errorCode).toEqual(0);

    // 从数据库中检索保存的 Key
    const retrievedKey = await getKey(jsonData.id, password)

    // 断言检索到的 Key 是否与保存的 Key 一致
    expect(retrievedKey.data.KeyDocument).toEqual(jsonData);

    // 调用保存函数重复
    const saveKeyDuplicate  = await importKey(jsonData, password);
    expect(saveKeyDuplicate.errorCode).toEqual(200001);
  });

  test('save a Key for Password does not exist error', async () => {
    
    // 调用保存函数
    const saveKey = await importKey(jsonDataError, "");
    expect(saveKey.errorCode).toEqual(200004);

  });
  test('save a Key for Document format error', async () => {
    
    // 调用保存函数
    const saveKey = await importKey(jsonDataError, password);
    expect(saveKey.errorCode).toEqual(100002);

  });
  test('quert Key for Kid for Password error', async () => {

    // 从数据库中检索保存的 Key
    const retrievedKey = await getKey(jsonData.id, "8888")
    // 断言s
    expect(retrievedKey.errorCode).toEqual(200005);

  });
  test('update a Key to the database', async () => {

    jsonData.controller = "did:example:123456789";
    // 调用修改函数
    const saveKey = await updateKey(jsonData, password);
    expect(saveKey.errorCode).toEqual(0);

    // 从数据库中检索保存的 Key
    const retrievedKey = await getKey(jsonData.id, password)
    // 断言检索到的 Key 是否与保存的 Key 一致
    expect(retrievedKey.data.KeyDocument).toEqual(jsonData);

  });

  test('query Key List', async () => {

    // 从数据库中检索保存的 Key
    const retrievedKey = await listKeys()
    console.log('DidList:', retrievedKey);
    // 断言
    expect(retrievedKey.errorCode).toEqual(0);

  });

  test('delete Key for Kid', async () => {

    // 从数据库中检索保存的 Key
    const retrievedKey = await deleteKey(jsonData.id)
    // 断言
    expect(retrievedKey.errorCode).toEqual(0);

  });
  
  test('update a Key for the document does not exist error', async () => {

    // 调用修改函数
    const saveKey = await updateKey(jsonData, password);
    // 断言
    expect(saveKey.errorCode).toEqual(200003);

  });

  test('quert Key for Kid for the document does not exist error', async () => {

    // 从数据库中检索保存的 Key
    const retrievedKey = await getKey('did:bid:efYGggWARD5GN5TM', password)
    // 断言s
    expect(retrievedKey.errorCode).toEqual(200003);

  });

});
