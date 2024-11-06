<template>
    <div class="register-container">
        <div class="register-header">
            <div class="header-box">
                <Logo />
            </div>
        </div>
        <div class="register">
            <div class="register-box">
                <div class="register-title">
                    <h2>数字化转型公共服务平台注册</h2>
                    <p>
                        感谢您使用中小企业数字化转型公共服务平台进行企业注册。请您按照要求填写相关的
                        <br />
                        企业信息资料，这将有助于加快注册流程。
                    </p>
                </div>
                <div class="register-content">
                    <el-form
                        ref="ruleFormRef"
                        label-width="520px"
                        size="large"
                        label-position="top"
                        :model="state.ruleForm"
                        :rules="state.rules"
                        class="register-form"
                    >
                        <Account :ruleForm="state.ruleForm" />
                        <Unit :ruleForm="state.ruleForm" />
                        <Corporat :ruleForm="state.ruleForm" />
                        <Contact :ruleForm="state.ruleForm" />
                    </el-form>
                </div>
                <div class="form-option">
                    <el-button @click="goBack">取消</el-button>
                    <el-button
                        type="primary"
                        :loading="state.loading"
                        v-waves
                        @click="onSubmit"
                    >
                        立即注册
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="registerIndex">
import { defineAsyncComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
    verifyEmail,
    verifyIdCard,
    verifyNumberIntegerAndFloat,
    verifyPassword,
    verifyPhone,
    verifyPortCard
} from '/@/assets/scripts/toolsValidate'
// import { saveUnitInfo } from '/@/api/index/index'
// 引入组件
const Logo = defineAsyncComponent(() => import('/@/layout/logo/index.vue'))
const Account = defineAsyncComponent(() => import('./component/account.vue'))
const Unit = defineAsyncComponent(() => import('./component/unit.vue'))
const Corporat = defineAsyncComponent(() => import('./component/corporat.vue'))
const Contact = defineAsyncComponent(() => import('./component/contact.vue'))
const checkCapital = (rule: any, value: any, callback: any) => {
    if (value && !verifyNumberIntegerAndFloat(value)) {
        return callback(new Error('请输入纯数字（企业万元）'))
    }
    callback()
}
const checkPhone = (rule: any, value: any, callback: any) => {
    if (value && !verifyPhone(value)) {
        return callback(new Error('请输入正确格式手机号'))
    }
    callback()
}
const checkCard = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入证件号'))
    }
    if (state.ruleForm.cardType === '2' && !verifyPortCard(value)) {
        return callback(new Error('请输入正确格式护照'))
    }
    if (state.ruleForm.cardType === '1' && !verifyIdCard(value)) {
        return callback(new Error('请输入正确格式身份证'))
    }
    callback()
}
const checkLegalCard = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入证件号'))
    }
    if (state.ruleForm.legalCardType === '2' && !verifyPortCard(value)) {
        return callback(new Error('请输入正确格式护照'))
    }
    if (state.ruleForm.legalCardType === '1' && !verifyIdCard(value)) {
        return callback(new Error('请输入正确格式身份证'))
    }
    callback()
}
const checkEmail = (rule: any, value: any, callback: any) => {
    if (value && !verifyEmail(value)) {
        return callback(new Error('请输入正确格式邮箱'))
    }
    callback()
}
const checkPssword = (rule: any, value: any, callback: any) => {
    if (!verifyPassword(value)) {
        return callback(
            new Error('以字母开头，长度在6~16之间，只能包含字母、数字和下划线')
        )
    }
    callback()
}
const checkPsswordAge = (rule: any, value: any, callback: any) => {
    if (state.ruleForm.password && value && state.ruleForm.password !== value) {
        return callback(new Error('密码不一致！'))
    }
    callback()
}
const router = useRouter()
const ruleFormRef = ref()
const state = reactive({
    ruleForm: {
        username: '',
        password: '',
        verificationCode: '',
        confirmPassword: '',
        unitCode: '',
        unitName: '',
        unitUnifyCode: '',
        unitType: '',
        unitSignAddress: '',
        unitScale: '',
        unitCertType: '',
        unitPhoneAddress: '',
        unitNature: '',
        unitCard: '',
        industryType: '',
        unitAddress: '',
        detailAddress: '',
        registerOrgan: '',
        establishTime: '',
        registerCapital: '',
        officialWebsite: '',
        expireTime: '',
        unitCertPictureUrl: '',
        unitIntroduce: '',
        legalName: '',
        legalCardType: '',
        legalPhone: '',
        legalCard: '',
        legalFax: '',
        legalEmail: '',
        legalCardPic1Url: '',
        legalCardPic2Url: '',
        isEnterprise: '',
        name: '',
        phone: '',
        cardType: '',
        card: '',
        subsector: '',
        email: '',
        cardPic1Url: '',
        IsTechnology: '',
        cardPic2Url: ''
    },
    rules: {
        username: [
            {
                required: true,
                message: '请输入手机号',
                trigger: 'change'
            },
            {
                validator: checkPhone,
                trigger: 'change'
            }
        ],
        verificationCode: [
            {
                required: true,
                message: '请输入验证码',
                trigger: 'change'
            }
        ],
        password: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'change'
            },
            {
                validator: checkPssword,
                trigger: 'change'
            }
        ],
        confirmPassword: [
            {
                required: true,
                message: '请输入密码',
                trigger: 'change'
            },
            {
                validator: checkPsswordAge,
                trigger: 'change'
            }
        ],
        unitName: [
            {
                required: true,
                message: '请输入企业名称',
                trigger: 'change'
            }
        ],
        unitNature: [
            {
                required: true,
                message: '请选择企业性质',
                trigger: 'change'
            }
        ],
        unitSignAddress: [
            {
                required: true,
                message: '请输入企业注册地址',
                trigger: 'change'
            }
        ],
        unitPhoneAddress: [
            {
                required: true,
                message: '请选择企业通讯地址',
                trigger: 'change'
            }
        ],
        registerOrgan: [
            {
                required: true,
                message: '请输入注册机关',
                trigger: 'change'
            }
        ],
        unitScale: [
            {
                required: true,
                message: '请选择企业规模',
                trigger: 'change'
            }
        ],
        expireTime: [
            {
                required: true,
                message: '请选择有效期',
                trigger: 'change'
            }
        ],
        establishTime: [
            {
                required: true,
                message: '请选择成立日期',
                trigger: 'change'
            }
        ],
        unitCode: [
            {
                required: true,
                message: '请输入企业编码',
                trigger: 'change'
            }
        ],
        unitIntroduce: [
            {
                required: true,
                message: '请输入单位简介',
                trigger: 'change'
            }
        ],
        unitUnifyCode: [
            {
                required: true,
                message: '请输入企业统一代码',
                trigger: 'change'
            }
        ],
        unitType: [
            {
                required: true,
                message: '请选择企业类型',
                trigger: 'change'
            }
        ],
        unitCertType: [
            {
                required: true,
                message: '请选择企业证件类型',
                trigger: 'change'
            }
        ],
        unitCard: [
            {
                required: true,
                message: '请输入企业证件号',
                trigger: 'change'
            }
        ],
        industryType: [
            {
                required: true,
                message: '请选择行业类型',
                trigger: 'change'
            }
        ],
        unitAddress: [
            {
                required: true,
                message: '请选择企业地址',
                trigger: 'change'
            }
        ],
        officialWebsite: [
            {
                required: true,
                message: '请输入官方网站',
                trigger: 'change'
            }
        ],
        detailAddress: [
            {
                required: true,
                message: '请输入详细地址',
                trigger: 'change'
            }
        ],
        registerCapital: [
            {
                required: true,
                message: '请输入注册资本',
                trigger: 'change'
            },
            {
                validator: checkCapital,
                trigger: 'change'
            }
        ],
        // unitCertPictureUrl: [
        //     {
        //         required: true,
        //         message: '请上传单位证件照片',
        //         trigger: 'change'
        //     }
        // ],
        legalName: [
            {
                required: true,
                message: '请输入法定代表人姓名',
                trigger: 'change'
            }
        ],
        legalCardType: [
            {
                required: true,
                message: '请选择法定代表人证件类型',
                trigger: 'change'
            }
        ],
        legalFax: [
            {
                required: true,
                message: '请输入法定代表人传真',
                trigger: 'change'
            }
        ],
        legalPhone: [
            {
                required: true,
                message: '请输入手机号',
                trigger: 'change'
            },
            {
                validator: checkPhone,
                trigger: 'change'
            }
        ],
        legalEmail: [
            {
                required: true,
                message: '请输入邮箱',
                trigger: 'change'
            },
            {
                validator: checkEmail,
                trigger: 'change'
            }
        ],
        legalCard: [
            {
                required: true,
                validator: checkLegalCard
            }
        ],
        // legalCardPic1Url: [
        //     {
        //         required: true,
        //         message: '请选择法定代表人人像面地址',
        //         trigger: 'change'
        //     }
        // ],
        // legalCardPic2Url: [
        //     {
        //         required: true,
        //         message: '请选择法定代表人国徽面地址',
        //         trigger: 'change'
        //     }
        // ],

        isEnterprise: [
            {
                required: true,
                message: '请选择是否为规上企业',
                trigger: 'change'
            }
        ],
        cardType: [
            {
                required: true,
                message: '是否为高新技术企业',
                trigger: 'change'
            }
        ],
        phone: [
            {
                required: true,
                message: '请输入联系人手机号',
                trigger: 'change'
            },
            {
                validator: checkPhone,
                trigger: 'change'
            }
        ],
        developmentClass: [
            {
                required: true,
                message: '请选择',
                trigger: 'change'
            }
        ],
        productionClass: [
            {
                required: true,
                message: '请选择',
                trigger: 'change'
            }
        ],
        managerClass: [
            {
                required: true,
                message: '请选择',
                trigger: 'change'
            }
        ],
        storeClass: [
            {
                required: true,
                message: '请选择',
                trigger: 'change'
            }
        ],
        card: [
            {
                required: true,
                validator: checkCard,
                trigger: 'change'
            }
        ],
        IsTechnology: [
            {
                required: true,
                message: '请选择是否为高新技术企业',
                trigger: 'change'
            }
        ],
        // subsector: [
        //     {
        //         required: true,
        //         message: '请选择',
        //         trigger: 'change'
        //     }
        // ],
        email: [
            {
                required: true,
                message: '请输入联系人邮箱',
                trigger: 'change'
            },
            {
                validator: checkEmail,
                trigger: 'change'
            }
        ]
    },
    loading: false
})
const goBack = () => {
    router.push('/login')
}
const onSubmit = async () => {
    ruleFormRef.value.validate((valid: boolean) => {
        if (valid) {
            state.loading = true
            let params = { ...state.ruleForm }
            params.unitAddress = JSON.stringify(params.unitAddress)
            goBack()
            // saveUnitInfo(params)
            //     .then(({ data }) => {
            //         if (data.code && data.code !== 0) {
            //             state.loading = false
            //             ElMessage.error({
            //                 message: !data.isSuccess ? data.msg : 'Error',
            //                 type: 'error'
            //             })
            //         } else {
            //             ElMessage.success(`注册成功，请进行登录`)
            //             goBack()
            //         }
            //     })
            //     .catch(() => {
            //         state.loading = false
            //     })
        } else {
            return false
        }
    })
}
</script>

<style scoped lang="scss">
.register-container {
    height: 100vh;
    overflow: hidden;
}

.register-box {
    max-width: 1200px;
    padding-top: 56px;
    margin: 0 auto;

    .register-title {
        text-align: center;
        margin-bottom: 62px;

        h2 {
            font-size: 40px;
            color: #111;
            margin-bottom: 12px;
            font-weight: 600;
        }

        p {
            font-size: 18px;
            color: #666;
            line-height: 25px;
        }
    }

    .form-box {
        padding: 24px 42px;
        background: #fff;
        border-radius: 24px;
        margin-bottom: 30px;
    }
}

.form-option {
    padding: 60px 0;
    text-align: center;

    .el-button {
        width: 200px;
        height: 40px;
        border-radius: 20px;
    }
}

.register-header {
    height: 72px;
    background: #fff;

    .header-box {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }
}

.register {
    height: calc(100vh - 74px);
    overflow-y: auto;
}
</style>
