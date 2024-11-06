/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 申请凭证
  router.post('/createCredential', controller.home.createCredential);
  // 验证凭证
  router.post('/verCredential', controller.home.verCredential);
  // 获取凭证模版列表
  router.post('/getCertificateTemplate', controller.certificateTemplate.getCertificateTemplate);
  // 获取凭证记录
  router.post('/getCertificateRecord', controller.certificateRecord.getCertificateRecord);
  // 获取代理凭证记录
  router.post('/findAgentCredentialBybid', controller.agentCertificateRecord.findAgentCredentialBybid);
  // 同步代理凭证记录
  router.post('/syncCredential', controller.agentCertificateRecord.syncCredential);
  // 修改agent列表状态
  router.post('/updateAgentCredential', controller.agentCertificateRecord.updateAgentCredential);
  // 修改凭证状态
  router.post('/updateCertificateRecord', controller.certificateRecord.updateCertificateRecord);
  // 修改文档
  router.post('/updateBidDocumentRecord', controller.home.updateBidDocumentRecord);
  // 生成文档模版
  router.post('/generateDocumentTemplate', controller.home.generateDocumentTemplate);
  // 文档验证
  router.post('/validProof', controller.home.validProof);
  // 新增文档
  router.post('/addBidDocumentRecord', controller.home.addBidDocumentRecord);
  // 获取文档
  router.post('/getBidDocumentRecord', controller.home.getBidDocument);
  // 发证方接口
  // 新增申请凭证记录
  router.post('/addcredentialList', controller.credential.addcredentialList);
  // 获取申请凭证记录
  router.post('/getcredentialList', controller.credential.getcredentialList);
  // 修改申请凭证记录
  router.post('/updatecredentialList', controller.credential.updatecredentialList);
  // 验证方接口
  router.post('/veraddcredentialList', controller.vercredential.addcredentialList);
  // 获取申请凭证记录
  router.post('/vergetcredentialList', controller.vercredential.getcredentialList);
  // 修改申请凭证记录
  router.post('/verupdatecredentialList', controller.vercredential.updatecredentialList);
};
