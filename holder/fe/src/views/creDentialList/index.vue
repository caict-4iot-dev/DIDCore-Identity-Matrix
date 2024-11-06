<template>
    <div class="policy">
        <el-button
            style="margin-left: 1300px"
            type="primary"
            @click="openCreateVerIdential"
        >
            申请凭证
        </el-button>
        <el-table :data="state.tableData" style="width: 100%">
            <el-table-column type="expand">
                <template #default="props">
                    <div m="4">
                        <p m="t-0 b-2">
                            @context: {{ props.row.vc.vc['@context'] }}
                        </p>
                        <p m="t-0 b-2">type: {{ props.row.vc.vc['type'] }}</p>
                        <p m="t-0 b-2">
                            申请凭证类型:
                            {{
                                props.row.vc.vc['credentialSubject']
                                    .credentialType
                            }}
                        </p>
                        <p
                            v-for="item in props.row.vc.vc['credentialSubject']
                                .cerTemplateSubjectData"
                            :key="item.name"
                            m="t-0 b-2"
                        >
                            {{ item.name }}:{{ item.value }}
                        </p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="id" prop="id" width="120" />
            <el-table-column
                label="凭证类型"
                prop="credentialName"
                width="120"
            />
            <el-table-column
                label="凭证申请日期"
                prop="issuanceDate"
                width="220"
            />
            <el-table-column label="发证人" prop="creBid" width="220" />
            <el-table-column label="凭证申请状态" prop="statu" width="220" />
            <el-table-column label="凭证核验状态" prop="ver_statu" width="220" />
            <el-table-column label="操作" min-width="130">
                <template #default="scope">
                    <el-button size="large" v-if="scope.row.iss_status == 1" @click="openVerDialog(scope.row)">
                        验证凭证
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--        <el-button class="affix&#45;&#45;fixed" type="primary" @click="openCreateVerIdential">申请凭证</el-button>-->
        <!--    验证凭证弹窗-->
        <el-dialog
            v-model="state.verDialogVisible"
            :before-close="handleClose"
            title="Tips"
            width="780"
        >
            <div>
                <el-input
                    v-model="state.showVcData"
                    :rows="16"
                    placeholder="Please input"
                    style="width: 720px"
                    type="textarea"
                />
            </div>
            <div style="margin-top: 10px">
                验证方地址:
                <el-input
                    v-model="state.verifyAddress"
                    placeholder="请输入验证方地址"
                    style="width: 240px"
                />
                <p>验证方: {{ state.verBid }}</p>
                <p>验证结果: {{ state.verResult }}</p>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="verVerIdential()">
                        验证
                    </el-button>
                </div>
            </template>
        </el-dialog>
        <!--    申请凭证弹窗-->
        <el-dialog
            v-model="state.creDialogVisible"
            :before-close="crehandleClose"
            title="Tips"
            width="780"
        >
            <div class="dialog-contain">
                <div>
                    申请凭证类型：
                    <el-select
                        v-model="state.credentialType"
                        placeholder="Select"
                        size="large"
                        style="width: 240px"
                    >
                        <el-option
                            v-for="item in state.cerTemplateSelectData"
                            :key="item.id"
                            :label="item.templateName"
                            :value="item.templateName"
                        />
                    </el-select>
                </div>
                <el-form
                    ref="ruleFormRef"
                    :model="state.credentialFormData"
                    class="demo-ruleForm"
                    label-width="auto"
                    status-icon
                    style="max-width: 600px; margin-top: 20px"
                >
                    <el-form-item
                        v-for="item in state.cerTemplateSubjectData"
                        :key="item.id"
                        :label="item.name"
                        prop="pass"
                    >
                        <el-input
                            v-if="item.type === 'input'"
                            v-model="item.value"
                            style="width: 240px"
                        />
                        <el-input
                            v-if="item.type === 'select'"
                            v-model="item.value"
                            style="width: 240px"
                        />
                    </el-form-item>
                </el-form>
                <div>
                    发证方地址:
                    <el-input
                        v-model="state.credentialAddress"
                        placeholder="请输入发证方地址"
                        style="width: 240px"
                    />
                </div>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="createVerIdential()">
                        申请凭证
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
    findAgentCredentialBybidApi,
    getCertificateRecordApi,
    getCertificateTemplateApi,
    verVerIdentialApi
} from '/@/api/login/login-form'
import { ElMessage } from 'element-plus'
import { Buffer } from 'buffer'
import axios from 'axios'

const state = reactive({
    test: [],
    // 审核状态字典
    statusObj: {
        '0': '审核中',
        '1': '审核通过',
        '2': '审核拒绝'
    },
    // 凭证模版主图数据
    cerTemplateSubjectData: [],
    // 凭证模版选择数据
    cerTemplateSelectData: [],
    // 凭证模版类型选择值
    credentialType: '',
    // 凭证模版form值
    credentialFormData: {
        name: '',
        phone: ''
    },
    // VC
    showVcData: '',
    // 创建凭证弹框
    creDialogVisible: false,
    // 验证凭证弹框
    verDialogVisible: false,
    tableData: [],
    // 验证方bid
    verBid: '',
    // 验证结果
    verResult: '',
    // 发证方地址
    credentialAddress: 'http://localhost:7001/createCredential',
    // 验证方地址
    verifyAddress: 'http://localhost:7001/verCredential',
    id:""
})

/**
 * 打开验证证书弹框
 */
const openVerDialog = (vc: any) => {
    state.verDialogVisible = true
    state.showVcData = JSON.stringify(vc.certificate_vc)
    state.id = vc.id;
}

/**
 * 关闭验证证书弹框
 */
const handleClose = () => {
    state.verDialogVisible = false
    state.verResult = ''
    state.verBid = ''
}

/**
 * 关闭申请凭证弹框
 */
const crehandleClose = () => {
    // 清除申请凭证dialog 数据
    state.cerTemplateSubjectData = []
    state.credentialType = ''
    state.creDialogVisible = false
}

/**
 * 验证证书
 * @param vc
 */
const verVerIdential = async (row) => {
    let obj = { message: state.showVcData }
    let bifwallet = window.bifWallet
    // VC 签名
    bifwallet.signMessage(obj, async (res: any) => {
        // let verifyResult = await verVerIdentialApi(res.data);
        res.data.verid = state.id;
        let verifyResult = await axios.post(
            state.verifyAddress,
            res.data
        )
        if (verifyResult.data.code === 200) {
            ElMessage({
                message: '验证成功',
                type: 'success'
            })
            state.verResult = verifyResult.data.data.verified
            state.verBid = verifyResult.data.data.verBid
            handleClose();
        } else {
            ElMessage({
                message: verifyResult.data.error.message,
                type: 'error'
            })
        }
    })
}

/**
 * 打开生成凭证弹框
 */
const openCreateVerIdential = () => {
    state.creDialogVisible = true;
}

/**
 * 生成可验证证书
 */
const createVerIdential = async () => {
    let data = JSON.parse(localStorage.getItem('userInfo'))
    // 凭证主体 数据组装
    let credentialSubject = {
        credentialType: state.credentialType,
        cerTemplateSubjectData: state.cerTemplateSubjectData
    }
    let apiData = {
        bid: data.bid,
        credentialSubject: JSON.stringify(credentialSubject),
        publicKey: data.publicKey
    }
    let obj = { message: JSON.stringify(apiData) }
    let bifwallet = window.bifWallet
    // VC 签名
    bifwallet.signMessage(obj, async (res1: any) => {
        console.log('res1', res1)
        // res1.data.verid = data.bid;
        // let res = await createVerIdentialApi(res1.data);
        let {data:res} = await axios.post(
            state.credentialAddress,
            res1.data
        )
        console.log('res: ', res);
        if (res.code === 200) {
            selTableData()
            ElMessage({
                message: '生成成功',
                type: 'success'
            })
            crehandleClose()
            // // 轮训查询申请凭证状态
            // let intervalId = setInterval(selTableData, 1000);
            // setTimeout(() => {
            //   clearInterval(intervalId);
            // }, 6000)
        } else {
            ElMessage({
                message: res.data.error.message,
                type: 'error'
            })
        }
    })
}

/**
 *更新表格数据
 */
const selTableData = async () => {
    // let res = await findAgentCredentialBybidApi({})
    let { data: res } = await axios.post(
        'http://localhost:7001/findAgentCredentialBybid',
        {}
    )
    let verObj = {
        0: '未核验',
        1: '核验成功',
    }
    if (res.code == 200) {
        for (const item of res.data) {
            item.statu = state.statusObj[item.iss_status]|| '审核中'
            item.ver_statu = verObj[item.ver_status] || '核验中'
            item.certificate_vc = JSON.parse(item.certificate_vc)
            item.credentialName =
                item.certificate_vc.credentialSubject?.credentialType
            item.issuanceDate = formDate(item.created_time)
            item.creBid = item.credential_bid
            item.vc = item?.certificate_vc?.proof?.jwt
                ? decodeJwtPayload(item.certificate_vc.proof?.jwt)
                : ''
        }
        console.log('res.data',res.data);
        
        state.tableData = res.data
        // state.tableData.push(res.data[20,21])
    }
}

/**
 * 获取凭证模版列表
 */
const getCertificateTemplateData = async () => {
    let res = await getCertificateTemplateApi({})
    console.log('res', res)
    if (res.code === 200) {
        state.cerTemplateSelectData = res.data
    }
}

/**
 * 格式化时间
 * @param propsDate
 */
const formDate = (propsDate: any) => {
    const date = new Date(propsDate)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
    return new Intl.DateTimeFormat('zh-CN', options).format(date)
}

/**
 * jwt 解密
 */
function decodeJwtPayload(jwt) {
    // 分割 JWT 字符串
    const parts = jwt.split('.')
    // 解码 Payload
    const payload = Buffer.from(parts[1], 'base64').toString('utf-8')
    // 将 JSON 字符串转换为 JavaScript 对象
    const payloadObj = JSON.parse(payload)
    return payloadObj
}

watchEffect(() => {
    //监听凭证模版选择值
    state.cerTemplateSelectData.forEach((item) => {
        console.log('item.templateSubject: ', item.templateSubject)
        if (item.templateName === state.credentialType) {
            state.cerTemplateSubjectData = JSON.parse(item.templateSubject)
            console.log(
                'state.cerTemplateSubjectData: ',
                state.cerTemplateSubjectData
            )
        }
    })
})
onMounted(() => {
    getCertificateTemplateData()
    selTableData()
})
// selTableData()
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
                    color: #6d7280;
                    line-height: 20px;
                    padding: 14px 0 20px;
                    height: 74px;
                    @include text-ellipsis(2);
                }

                .info-meta {
                    span {
                        font-weight: 400;
                        font-size: 12px;
                        color: #6d7280;
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
</style>
