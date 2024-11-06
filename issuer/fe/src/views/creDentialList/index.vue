<template>
    <div class="policy">
        <el-form ref="ruleFormRef" :model="ruleForm" :size="formSize" class="demo-ruleForm" label-width="auto"
            status-icon style="max-width: 600px">
            <el-form-item label="bid" prop="name">
                <el-input v-model="ruleForm.bid" />
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="applyRedentialFun()">
                    申请凭证
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" name="policyIndex" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { applyRedential } from '/@/api/login/login-form'
import {ElMessage} from "element-plus";
interface RuleForm {
    name: string
    bid: string
    phone: string
    email: string
    date2: string
    delivery: boolean
    location: string
    type: string[]
    resource: string
    desc: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    name: '',
    bid: '',
    phone: '',
    email: '',
    date2: '',
    delivery: false,
    location: '',
    type: [],
    resource: '',
    desc: '',
})

const locationOptions = ['Home', 'Company', 'School']

const applyRedentialFun = async () => {
    let params = {
        bid: ruleForm.bid,
        subject: [
            {
                name: "姓名",
                value: ruleForm.name,
            },
            {
                name: "手机号",
                value: ruleForm.phone,
            },
            {
                name: "邮箱",
                value: ruleForm.email,
            }
        ],
    };
    let res = await applyRedential(params)
    if (res.code == 200) {
        console.log('2');
        ElMessage({
          message: '申请成功',
          type: 'success',
        })
      }
    console.log('res', res);
}

const rules = reactive<FormRules<RuleForm>>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    location: [
        {
            required: true,
            message: 'Please select a location',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})


const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
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
</style>
