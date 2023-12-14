const { createConnection } = require('typeorm');
const { DidDocumentEntity } = require('./entities/DidDocumentEntity.js');
const { DidDocument } = require('./entities/DidDocument.js');

async function validateAuthenticationContext(didDocumentInstance) {

  const expectedContext = [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/ed25519-2020/v1"
  ];

  if (didDocumentInstance['@context'].length === 0) {
    return false;
  }

  for (const context of expectedContext) {
    if (!didDocumentInstance['@context'].includes(context)) {
      return false;
    }
  }

  const fields = ['id', 'authentication', 'extension', 'created', 'updated'];
  for (const field of fields) {
    if (!didDocumentInstance[field] || didDocumentInstance[field].length === 0) {
      return false;
    }
  }
  return true;
}
//保存
async function importDID(jsonData) {
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'did_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        DidDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 加载仓库
    const didDocumentRepository = connection.getRepository(DidDocumentEntity);

    const didDocumentInstance = new DidDocument(jsonData);

    // 格式校验
    
    if(!await validateAuthenticationContext(didDocumentInstance)){
      return {
        errorCode: 100002,
        message: 'Document format error',
      };
    }

    // 校验did是否重复
    const did = didDocumentInstance.id;
    const queriedDocument = await didDocumentRepository.findOne({ where: { did } });
    if (queriedDocument) {
      return {
        errorCode: 100001,
        message: 'Duplicate BID for the document',
      };
    }

    // 保存文档
    const entityData = didDocumentInstance.toEntity();
    await didDocumentRepository.save(entityData);

    return {
      errorCode: 0,
      message: 'SUCCESS',
    };

  } catch (error) {
    console.log('Error connecting to the database:', error);

    // 根据错误类型设置不同的错误码和消息
    let errorCode, errorMessage;
    if (error.message === 'Duplicate BID for the document') {
      errorCode = 100001; // 文档的BID重复
      errorMessage = 'Duplicate BID for the document';
    } else if (error.message === 'Document format error') {
      errorCode = 100002; // 文档格式错误
      errorMessage = 'Document format error';
    } else {
      errorCode = 400000; // 系统错误
      errorMessage = 'System error';
    }

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
//修改
async function updateDID(jsonData) {
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'did_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        DidDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 加载仓库
    const didDocumentRepository = connection.getRepository(DidDocumentEntity);

    const didDocumentInstance = new DidDocument(jsonData);

    // 格式校验
    
    if(!await validateAuthenticationContext(didDocumentInstance)){
      return {
        errorCode: 100002,
        message: 'Document format error',
      };
    }

    // 修改文档
    const entityData = didDocumentInstance.toEntity();
    const result = await didDocumentRepository.update({ did: entityData.did }, entityData);
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
    if (error.message === 'Duplicate BID for the document') {
      errorCode = 100001; // 文档的BID重复
      errorMessage = 'Duplicate BID for the document';
    } else if (error.message === 'Document format error') {
      errorCode = 100002; // 文档格式错误
      errorMessage = 'Document format error';
    } else {
      errorCode = 400000; // 系统错误
      errorMessage = 'System error';
    }

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

// 根据 did 查询数据并返回
async function getDID(did) {
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'did_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        DidDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 返回仓库
    const didDocumentRepository = connection.getRepository(DidDocumentEntity);

    // 根据 did 查询文档
    const queriedDocument = await didDocumentRepository.findOne({ where: { did } });

    if (queriedDocument) {
      const didDocumentInstance = DidDocument.fromEntity(queriedDocument);
      return {
        errorCode: 0,
        message: 'SUCCESS',
        data: {
          didDocument: didDocumentInstance
        }
      };
    }else{
      return {
        errorCode: 100003,
        message: 'BID for the document does not exist'
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


// 根据 did 删除数据
async function deleteDID(did) {
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'did_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        DidDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 返回仓库
    const didDocumentRepository = connection.getRepository(DidDocumentEntity);

    // 使用 delete 方法删除记录
    const result = await didDocumentRepository.delete({ did: did });

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


// 根据 did 查询数据并返回
async function listDIDs(pageStart, pageSize) {
  let connection;

  try {
    // 创建数据库连接
    connection = await createConnection({
      type: 'sqlite',
      database: 'did_document.sqlite',
      synchronize: true,
      logging: true,
      entities: [
        DidDocumentEntity
      ],
    });

    // 加载实体的元数据
    await connection.synchronize();

    // 返回仓库
    const didDocumentRepository = connection.getRepository(DidDocumentEntity);

    pageStart = pageStart?pageStart:1;
    pageSize = pageSize?pageSize:1000;
    // 计算分页偏移量
    const offset = (pageStart - 1) * pageSize;

    // 使用 createQueryBuilder 构建自定义查询
    const queryBuilder = didDocumentRepository.createQueryBuilder('didDocument')
      .select(['didDocument.did']) // 只选择 did 字段
      .offset(offset)
      .limit(pageSize);


    // 执行查询
    const [results, totalCount] = await Promise.all([
      queryBuilder.getMany(),
      queryBuilder.getCount(),
    ]);
    const dids = results.map(result => result.did);
    return {
      errorCode: 0,
      message: 'SUCCESS',
      page: {
        pageStart: pageStart,
        pageSize: pageSize,
        pageTotal: totalCount
      },
      dataList: dids
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

// export { importDID, updateDID, getDID, deleteDID, listDIDs };

module.exports = { importDID, updateDID, getDID, deleteDID, listDIDs };
