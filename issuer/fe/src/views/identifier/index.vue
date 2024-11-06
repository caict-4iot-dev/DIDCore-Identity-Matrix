<template>
    <div class="policy">
        <el-button style="margin-left: 1300px" type="primary" @click="openCreateVerIdential">创建文档</el-button>
        <el-table :data="state.tableData" style="width: 100%">
            <el-table-column label="id" prop="id" width="220" />
            <el-table-column label="bid" prop="bid" width="420" />
            <el-table-column label="document" prop="doc" width="420" />

            <el-table-column label="操作" min-width="130">
                <template #default="scope">
                    <el-button type="primary" @click="verifyDocument(scope.row)">
                        验证文档
                    </el-button>
                    <el-button type="primary" @click="openVerDialog(scope.row)">
                        修改文档
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--    修改文档弹窗-->
        <el-dialog v-model="state.verDialogVisible" :before-close="handleClose" title="Tips" width="780">
            <div>
                <p style="margin-bottom: 10px;">私钥:
                    <el-input v-model="state.privateKey" placeholder="Please input privateKey" style="width: 240px" />
                </p>
                <el-input v-model="state.editDocumentVal" :rows="16" placeholder="Please input" style="width: 720px"
                    type="textarea" />
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="editDocument()">修改文档</el-button>
                </div>
            </template>
        </el-dialog>
        <!--    新增文档弹窗-->
        <el-dialog v-model="state.creDialogVisible" :before-close="crehandleClose" title="Tips" width="780">
            <div class="dialog-contain">
                <div>
                    <p style="margin-bottom: 10px;">bid：{{ state.bid }}</p>
                    <p style="margin-bottom: 10px;">私钥:
                        <el-input v-model="state.privateKey" placeholder="Please input privateKey"
                            style="width: 240px" />
                    </p>
                    <p style="margin-bottom: 10px;">公钥：{{ state.publickey }}</p>
                    <p style="margin-bottom: 10px;">文档：
                        <el-input v-model="state.documentValue" :rows="15" placeholder="Please input"
                            style="width: 440px" type="textarea" />
                    </p>
                    <p style="margin-bottom: 10px;">别名:
                        <el-input v-model="state.alias" placeholder="Please input privateKey" style="width: 240px" />
                    </p>
                </div>
                <div class="dialog-contain-documentTemplate">
                    <el-popover :disabled="state.documentPopupVisible" :width="200" content="请先输入私钥"
                        placement="top-start" trigger="hover">
                        <template #reference>
                            <el-button :disabled="state.documentDisabled" type="primary"
                                @click="getDocumentTemplate()">生成文档模板
                            </el-button>
                        </template>
                    </el-popover>
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button :disabled="state.createDocumentDisabled" type="primary" @click="createDocument()">创建文档
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" name="policyIndex" setup>
import { onMounted, reactive, watchEffect } from 'vue'
import {
    createVerIdentialApi,
    findAgentCredentialBybidApi, getCertificateRecordApi,
    getCertificateTemplateApi,
    updateBidDocumentRecord,
    generateDocumentTemplate,
    addBidDocumentRecord,
    getBidDocumentRecord,
    validProof
} from "/@/api/login/login-form";
import { ElMessage, ElMessageBox } from "element-plus";
import { Buffer } from 'buffer';
import axios from "axios";


const state = reactive({
    documentId: "",
    editDocumentVal: "",
    // 创建文档dialog bid
    bid: "did:bid:efjuJxqFwfmKBjKPdMGguR9RdGvCSFKH",
    // 创建文档dialog alias
    alias: "",
    // 创建文档dialog 公钥
    publickey: "b06566e6a1b5a6c761c174d32b4da69142ba190b62e23161b091433819b211e66ce2d6",
    // 创建文档dialog 私钥
    privateKey: "",
    // 创建文档dialog  控制生成文档模板btn
    documentDisabled: true,
    // 创建文档dialog 控制生产文档模板btn划过显示
    documentPopupVisible: false,
    // 床啊金文档dialog 控制创建文档btn点击
    createDocumentDisabled: false,
    // 创建文档dialog document value
    documentValue: "",
    // 审核状态字典
    statusObj: {
        0: "审核中",
        1: "审核通过",
        2: "审核拒绝",
    },
    // 凭证模版主图数据
    cerTemplateSubjectData: [],
    // 凭证模版选择数据
    cerTemplateSelectData: [],
    // 凭证模版类型选择值
    credentialType: "",
    // 凭证模版form值
    credentialFormData: {
        name: "",
        phone: "",
    },
    // VC
    showVcData: "",
    // 创建凭证弹框
    creDialogVisible: false,
    // 验证凭证弹框
    verDialogVisible: false,
    tableData: [

    ],
    // 验证方bid
    verBid: "",
    // 验证结果
    verResult: "",
    // 发证方地址
    credentialAddress: "http://localhost:7001/createCredential",
    // 验证方地址
    verifyAddress: "http://localhost:7004/verCredential",
})

/**
 * 验证文档
 */
const verifyDocument = async (raw: any) => {
    console.log('raw', raw);
    let res = await validProof({ document: JSON.parse(raw.document) });
    if (res.data.success) {
        ElMessage({
            type: 'success',
            message: res.data.message,
        })
    } else {
        ElMessage({
            type: 'error',
            message: res.data.message,
        })
    }
}

/**
 * 修改文档
 */
const editDocument = async () => {
    let data = JSON.parse(localStorage.getItem('userInfo'));
    let document = state.editDocumentVal;
    let params = {
        id: state.documentId,
        bid: data.bid,
        document: document
    };
    let res = await updateBidDocumentRecord(params);
    console.log('res: ', res);
    if (res.code == 200) {
        ElMessage({
            type: 'success',
            message: res.msg,
        })
        state.verDialogVisible = false;
    } else {
        ElMessage({
            type: 'error',
            message: res.msg,
        })
    }

}

/**
 * 新增文档
 */
const createDocument = async () => {
    let params = {
        bid: state.bid,
        privateKey: state.privateKey,
        document: state.documentValue,
        alias: state.alias
    };
    let res = await addBidDocumentRecord(params);
    console.log('res: ', res);
    ElMessage({
        type: 'success',
        message: res.msg,
    })
    state.creDialogVisible = false;
}

const substr = (str: string, len: number) => {
    return str.substring(0, len) + '...'
}

/**
 * 获取文档
 */
const getBidDocument = async () => {
    let res = await getBidDocumentRecord({});
    if (res.code == 200) {
        if (typeof res.data == 'object') {
            res.data.doc = substr(res.data.document, 12);
            state.tableData = [res.data];
        } else {
            state.tableData = res.data;
        }
        console.log('state.tableData: ', state.tableData);

    }
}

/**
 * 生成文档模板
 * @returns
 */
const getDocumentTemplate = () => {
    ElMessageBox.confirm(
        '是否需要生成文档加密字段',
        '',
        {
            confirmButtonText: '是',
            cancelButtonText: '否',
            center: true,
        }
    )
        .then(async () => {
            // 后端接口请求 - 需要把 proofFlag传为true 后端再次调用生产proof字段
            let params = {
                bid: state.bid,
                proofFlag: true,
                privateKey: state.privateKey,
                publickey: state.publickey,
            }
            let res = await generateDocumentTemplate(params)
            console.log('res: ', res);
            state.documentValue = JSON.stringify(res.data);
            console.log('state.documentValue: ', state.documentValue);

            ElMessage({
                type: 'success',
                message: res.msg,
            })
        })
        .catch(async () => {
            // 后端接口请求 - 需要把 proofFlag传为false 后端不调用生产proof字段
            let params = {
                bid: state.bid,
                proofFlag: false,
                privateKey: state.privateKey,
                publickey: state.publickey,
            }
            let res = await generateDocumentTemplate(params)
            console.log('res: ', res);
            ElMessage({
                type: 'success',
                message: res.msg,
            })
        })
}

/**
 * 打开验证证书弹框
 */
const openVerDialog = (vc: any) => {
    console.log('vc: ', vc);
    state.verDialogVisible = true;
    state.editDocumentVal = JSON.stringify(vc.document);
    state.documentId = vc.id;
}

/**
 * 关闭验证证书弹框
 */
const handleClose = () => {
    state.verDialogVisible = false;
    state.verResult = '';
    state.verBid = ''
}

/**
 * 关闭申请凭证弹框
 */
const crehandleClose = () => {
    // 清除申请凭证dialog 数据
    state.cerTemplateSubjectData = [];
    state.credentialType = ''
    state.creDialogVisible = false;
}

/**
 * 验证证书
 * @param vc
 */
const verVerIdential = async () => {
    let obj = { message: state.showVcData }
    let bifwallet = window.bifWallet;
    // VC 签名
    bifwallet.signMessage(obj, async (res: any) => {
        // let verifyResult = await verVerIdentialApi(res.data);
        let verifyResult = await axios.post('http://localhost:7004/verCredential', res.data);
        if (verifyResult.data.code === 200) {
            ElMessage({
                message: '验证成功',
                type: 'success',
            })
            state.verResult = verifyResult.data.data.verified;
            state.verBid = verifyResult.data.data.verBid;
            // handleClose();
        } else {
            ElMessage({
                message: verifyResult.data.error.message,
                type: 'error',
            })
        }
    })
}

/**
 * 打开生成凭证弹框
 */
const openCreateVerIdential = () => {
    state.creDialogVisible = true;
    let data = JSON.parse(localStorage.getItem('userInfo'));
    console.log('data: ', data);
    state.bid = data.bid;
    state.publickey = data.publicKey;
}


/**
 *更新表格数据
 */
const selTableData = async () => {
    // let res = await findAgentCredentialBybidApi({})
    let { data: res } = await axios.post('http://localhost:7002/findAgentCredentialBybid', {});
    if (res.code == 200) {
        for (const item of res.data) {
            let res = await getCertificateRecordApi({ messageId: Number(item.recordId) });
            console.log('res', res);
            item.status = state.statusObj[res.data.status];
            item.certificate_vc = JSON.parse(item.certificate_vc);
            item.credentialName = item.certificate_vc.credentialSubject?.credentialType;
            item.issuanceDate = formDate(item.created_time);
            item.creBid = item.credential_bid;
            item.vc = item?.certificate_vc?.proof?.jwt ? decodeJwtPayload(item.certificate_vc.proof?.jwt) : '';
        }
        state.tableData = res.data
    }
}

/**
 * 获取凭证模版列表
 */
const getCertificateTemplateData = async () => {
    let res = await getCertificateTemplateApi({});
    console.log('res', res);
    if (res.code === 200) {
        state.cerTemplateSelectData = res.data;
    }
}

/**
 * 格式化时间
 * @param propsDate
 */
const formDate = (propsDate: any) => {
    const date = new Date(propsDate);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return new Intl.DateTimeFormat('zh-CN', options).format(date);
}

/**
 * jwt 解密
 */
function decodeJwtPayload (jwt) {
    // 分割 JWT 字符串
    const parts = jwt.split('.');
    // 解码 Payload
    const payload = Buffer.from(parts[1], 'base64').toString('utf-8');
    // 将 JSON 字符串转换为 JavaScript 对象
    const payloadObj = JSON.parse(payload);
    return payloadObj;
}

watchEffect(() => {
    if (state.privateKey) {
        state.documentDisabled = false;
        state.documentPopupVisible = true;
    } else {
        state.documentDisabled = true;
        state.documentPopupVisible = false;
    }
    if (state.documentValue) {
        state.createDocumentDisabled = false;
    } else {
        state.createDocumentDisabled = true;
    }
})
onMounted(() => {
    getCertificateTemplateData();
    // selTableData();
    getBidDocument();
})
selTableData()
</script>

<style lang="scss" scoped>
@import '/@/assets/scss/mixins/index.scss';


//.dialog-contain {
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//}


.policy {
    margin: 20px;
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 300px;
        background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
        opacity: 0.8;
        @include abs(150px, auto, auto, 0);
    }

    .affix--fixed {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 200px;
        height: 200px;
        border-radius: 200px;
        font-size: 30px;
    }

    .wrap {
        position: relative;
        z-index: 1;
    }

    .policy-list {
        padding: 20px 0 53px;

        li {
            padding: 30px 0 28px;
            border-bottom: 1px solid rgba(151, 151, 151, 0.2);

            a {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            .item-img {
                width: 170px;
                height: 125px;
                border-radius: 8px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .item-info {
                width: calc(100% - 210px);
                padding-top: 6px;

                .info-title {
                    font-weight: 500;
                    font-size: 16px;
                    color: #333333;
                    line-height: 22px;
                }

                .info-desc {
                    font-weight: 400;
                    font-size: 14px;
                    color: #6D7280;
                    line-height: 20px;
                    padding: 14px 0 20px;
                    height: 74px;
                    @include text-ellipsis(2);
                }

                .info-meta {
                    span {
                        font-weight: 400;
                        font-size: 12px;
                        color: #6D7280;
                        line-height: 17px;

                        &:nth-child(1) {
                            margin-right: 162px;
                        }
                    }
                }
            }
        }
    }
}

.dialog-contain {
    position: relative;

    .dialog-contain-documentTemplate {
        position: absolute;
        top: 0%;
        right: 5%;

        button {
            width: 150px;
            height: 40px;
            font-size: 16px;
        }
    }
}
</style>
