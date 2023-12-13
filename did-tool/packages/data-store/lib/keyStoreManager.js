const { createConnection } = require('typeorm');
const { KeyDocumentEntity } = require('./entities/KeyDocumentEntity.js');
const { KeyDocument } = require('./entities/KeyDocument.js');
const keystore = require('./keystore.js');

async function validateAuthenticationContext(keyDocumentInstance) {

  const fields = ['id', 'controller', 'publicKeyMultibase'];
  for (const field of fields) {
    if (!keyDocumentInstance[field] || keyDocumentInstance[field].length === 0) {
      return false;
    }
  }
  return true;
}
//保存
async function importKey(jsonData, password) {

  if (!password || password.length === 0) {
    return {
      errorCode: 200004,
      message: 'Password does not exist',
    };
  }
  const keyDocumentInstance = new KeyDocument(jsonData);
  // 格式校验
  if(!await validateAuthenticationContext(keyDocumentInstance)){
    return {
      errorCode: 100002,
      message: 'Document format error',
    };
  }
  
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'key_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        KeyDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 加载仓库
    const keyDocumentRepository = connection.getRepository(KeyDocumentEntity);

    // 校验kid是否重复
    const kid = keyDocumentInstance.id;
    const queriedDocument = await keyDocumentRepository.findOne({ where: { kid } });
    if (queriedDocument) {
      return {
        errorCode: 200001,
        message: 'Duplicate key ID for the document',
      };
    };
    // 将 JSON 转换为字符串
    const jsonString = JSON.stringify(keyDocumentInstance);
    const keyStore = keystore.create(jsonString, password)
    const keyDoc = {
      keyStore: keyStore,
      kid: keyDocumentInstance.id
    }
    // 保存文档
    await keyDocumentRepository.save(keyDoc);

    return {
      errorCode: 0,
      message: 'SUCCESS',
    };

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } finally {
    // 最后，确保关闭数据库连接
    if (connection) {
      await connection.close();
    }
  }
}
//修改
async function updateKey(jsonData, password) {

  if (!password || password.length === 0) {
    return {
      errorCode: 200004,
      message: 'Password does not exist',
    };
  }
  const keyDocumentInstance = new KeyDocument(jsonData);
  // 格式校验
  if(!await validateAuthenticationContext(keyDocumentInstance)){
    return {
      errorCode: 100002,
      message: 'Document format error',
    };
  }

  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'key_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        KeyDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 加载仓库
    const keyDocumentRepository = connection.getRepository(KeyDocumentEntity);

    // 将 JSON 转换为字符串
    const jsonString = JSON.stringify(keyDocumentInstance);
    const keyStore = keystore.create(jsonString, password)
    const keyDoc = {
      keyStore: keyStore,
      kid: keyDocumentInstance.id
    }

    const result = await keyDocumentRepository.update({ kid: keyDocumentInstance.id }, keyDoc);
    if(result.affected > 0){
      return {
        errorCode: 0,
        message: 'SUCCESS',
      };
    }else{
      return {
        errorCode: 200003,
        message: 'Key ID for the document does not exist',
      };
    }
    

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } finally {
    // 最后，确保关闭数据库连接
    if (connection) {
      await connection.close();
    }
  }
}

// 根据 kid 查询数据并返回
async function getKey(kid, password) {
  if (!password || password.length === 0) {
    return {
      errorCode: 200004,
      message: 'Password does not exist',
    };
  }

  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'key_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        KeyDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 返回仓库
    const keyDocumentRepository = connection.getRepository(KeyDocumentEntity);

    // 根据 kid 查询文档
    const queriedDocument = await keyDocumentRepository.findOne({ where: { kid } });

    if (queriedDocument) {
      const keyStore = queriedDocument.keyStore;
      if (typeof keyStore === 'string') {
        keyStore = JSON.parse(keyStore)
      }
      const keyDocumentInstance = keystore.imported(keyStore, password)

      if(!keyDocumentInstance) {
        return {
          errorCode: 200005,
          message: 'Password error'
        };
      }
      const parsedObject = JSON.parse(keyDocumentInstance);

      return {
        errorCode: 0,
        message: 'SUCCESS',
        data: {
          KeyDocument: parsedObject
        }
      };
    }else{
      return {
        errorCode: 200003,
        message: 'Key ID for the document does not exist'
      };
    }

  } catch (error) {
    console.log('Error connecting to the database:', error);

    // 根据错误类型设置不同的错误码和消息
    let errorCode, errorMessage;
    errorCode = 400000; // 系统错误
    errorMessage = 'System error';

    throw {
      errorCode,
      message: errorMessage,
    };

  } finally {
    // 最后，确保关闭数据库连接
    if (connection) {
      await connection.close();
    }
  }
}


// 根据 kid 删除数据
async function deleteKey(kid) {
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'key_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        KeyDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 返回仓库
    const keyDocumentRepository = connection.getRepository(KeyDocumentEntity);

    // 使用 delete 方法删除记录
    const result = await keyDocumentRepository.delete({ kid: kid });

    if(result.affected > 0){
      return {
        errorCode: 0,
        message: 'SUCCESS',
      };
    }else{
      return {
        errorCode: 100003,
        message: 'BID for the document does not exist',
      };
    }

  } catch (error) {
    console.log('Error connecting to the database:', error);

    // 根据错误类型设置不同的错误码和消息
    let errorCode, errorMessage;
    errorCode = 400000; // 系统错误
    errorMessage = 'System error';

    throw {
      errorCode,
      message: errorMessage,
    };

  } finally {
    // 最后，确保关闭数据库连接
    if (connection) {
      await connection.close();
    }
  }
}


// 根据 kid 查询数据并返回
async function listKeys(pageStart, pageSize) {
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'key_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        KeyDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 返回仓库
    const keyDocumentRepository = connection.getRepository(KeyDocumentEntity);

    pageStart = pageStart?pageStart:1;
    pageSize = pageSize?pageSize:1000;
    // 计算分页偏移量
    const offset = (pageStart - 1) * pageSize;

    // 使用 createQueryBuilder 构建自定义查询
    const queryBuilder = keyDocumentRepository.createQueryBuilder('KeyDocument')
      .select(['KeyDocument.kid']) // 只选择 kid 字段
      .offset(offset)
      .limit(pageSize);


    // 执行查询
    const [results, totalCount] = await Promise.all([
      queryBuilder.getMany(),
      queryBuilder.getCount(),
    ]);
    const kids = results.map(result => result.kid);
    return {
      errorCode: 0,
      message: 'SUCCESS',
      page: {
        pageStart: pageStart,
        pageSize: pageSize,
        pageTotal: totalCount
      },
      dataList: kids
    };

  } catch (error) {
    console.log('Error connecting to the database:', error);

    throw {
      errorCode: 400000,
      message: 'System error',
    };

  } finally {
    // 最后，确保关闭数据库连接
    if (connection) {
      await connection.close();
    }
  }
}

export { importKey, updateKey, getKey, deleteKey, listKeys };
