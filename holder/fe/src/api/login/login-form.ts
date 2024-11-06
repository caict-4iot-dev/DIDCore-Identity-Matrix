import request from '/@/assets/scripts/request';

/**
 * 生成凭证
 * @param data
 */
export function createVerIdentialApi (data: Object) {
    return request({
        url: `createCredential`,
        method: 'post',
        data
    });
}

/**
 * 验证凭证
 * @param data
 */
export function verVerIdentialApi (data: Object) {
    return request({
        url: `verCredential`,
        method: 'post',
        data
    });
}

/**
 * 查询凭证模版列表
 * @param data
 */
export function getCertificateTemplateApi (data: Object) {
    return request({
        url: `getCertificateTemplate`,
        method: 'post',
        data
    });
}


/**
 * 查询凭证列表
 * @param data
 */
export function findAgentCredentialBybidApi (data: Object) {
    return request({
        url: `findAgentCredentialBybid`,
        method: 'post',
        data
    });
}


/**
 * 查询凭证列表
 * @param data
 */
export function getCertificateRecordApi (data: Object) {
    return request({
        url: `getCertificateRecord`,
        method: 'post',
        data
    });
}


/**
 * 修改文档
 * @param data
 */
export function updateBidDocumentRecord (data: Object) {
    return request({
        url: `updateBidDocumentRecord`,
        method: 'post',
        data
    });
}



/**
 * 生成文档模版
 * @param data
 */
export function generateDocumentTemplate (data: Object) {
    return request({
        url: `generateDocumentTemplate`,
        method: 'post',
        data
    });
}

/**
 * 文档验证
 * @param data
 */
export function validProof (data: Object) {
    return request({
        url: `validProof`,
        method: 'post',
        data
    });
}

/**
 * 新增文档
 * @param data
 */
export function addBidDocumentRecord (data: Object) {
    return request({
        url: `addBidDocumentRecord`,
        method: 'post',
        data
    });
}

/**
 * 获取文档
 * @param data
 */
export function getBidDocumentRecord (data: Object) {
    return request({
        url: `getBidDocumentRecord`,
        method: 'post',
        data
    });
}

