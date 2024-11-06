<template>
    <div class="container">
        <div class="wrap">
            <div class="page-nav">
                <router-link to="/hall/resource">供需大厅</router-link>
                <router-link to="/hall/demand">需求列表</router-link>
                <span>发布需求</span>
            </div>
            <div class="container-form">
                <el-form
                    ref="ruleFormRef" 
                    :model="ruleForm"
                    :rules="rules"
                    label-width="auto"
                    class="demo-ruleForm"
                    :size="formSize"
                    status-icon
                >
                    <Attribute :ruleForm="ruleForm"/>
                    <!-- <Ascript :ruleForm="ruleForm"/> -->
                    <Invest :ruleForm="ruleForm"/>
                    <Appeal :ruleForm="ruleForm"/>
                </el-form>
                <div class="form-option">
                    <el-button @click="goBack">返回</el-button>
                    <el-button
                        type="primary"
                        :loading="state.loading"
                        v-waves
                        @click="onSubmit"
                    >
                        提交
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" name="requirements">
import { defineAsyncComponent,reactive, ref } from 'vue'
import type { ComponentSize, FormRules } from 'element-plus'
import router from '/@/router'
const Attribute = defineAsyncComponent(() => import('./component/attribute.vue'))
// const Ascript = defineAsyncComponent(() => import('./component/ascript.vue'))
const Invest = defineAsyncComponent(() => import('./component/invest.vue'))
const Appeal = defineAsyncComponent(() => import('./component/appeal.vue'))

interface RuleForm {
    reType: string
    reTitle: string
    description: string
    industry: string
    belongs: string
    demandSource: string
    DeadlineDate: string
}
const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref()
const ruleForm = reactive<RuleForm>({
    reType: '',
    reTitle: '',
    description: '',
    industry: '',
    belongs: '',
    demandSource: '',
    DeadlineDate: ''
})
const state = reactive({
    reTypeRadioOptions: [
        '技术转移',
        '专家咨询',
        '合作开发',
        '检验测试',
        '新技术研发',
        '技术咨询',
        '技术服务',
        '产研合作',
        '其他'
    ],
    loading: false,
    dataRadioOptions: ['一个月内', '三个月内', '半年内', '一年内', '自定义']
})
 

const rules = reactive<FormRules<RuleForm>>({
    reType: [
        {
            required: true,
            message: '请选择需求类型',
            trigger: 'change'
        }
    ],
    reTitle: [
        {
            required: true,
            message: '请输入需求标题',
            trigger: 'change'
        }
    ],
    description: [
        {
            required: true,
            message: '请输入描述',
            trigger: 'change'
        }
    ],
    industry: [
        {
            required: true,
            message: '请选择所属行业',
            trigger: 'change'
        }
    ],
    belongs: [
        {
            required: true,
            message: '请选择所属领域',
            trigger: 'change'
        }
    ],
    demandSource: [
        {
            required: true,
            message: '请选择需求来源地',
            trigger: 'change'
        }
    ],
    DeadlineDate: [
        {
            required: true,
            message: '请选择截止日期',
            trigger: 'change'
        }
    ]
})
const goBack = () => {
    router.push('/hall/resource')
}
const onSubmit = () => {
    ruleFormRef.value.validate((valid: boolean) => {
        if (valid) {
            router.push('/hall/resource')
        } else {
            return false
        }
    })
} 
</script>
<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
        content: '';
        width: 100%;
        height: 300px;
        background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
        opacity: 0.8;
        @include abs(0, auto, auto, 0);
    }
    .wrap {
        position: relative;
        z-index: 2;
    }
    .page-nav {
        padding: 30px 0;
        font-size: 14px;
        line-height: 20px;
        text-shadow: 0px 2px 4px #ffffff;
        a {
            color: #333333;
            position: relative;
            margin-right: 10px;
            padding-right: 10px;
            &::before {
                content: '/';
                display: block;
                width: 1px;
                height: 16px;
                color: #333;
                position: absolute;
                right: 0;
                top: -1px;
            }
        }
        span {
            color: #0167fe;
        }
    }
    .container-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        :deep(.form-box){
            width: 1200px;
            margin-bottom: 30px;
            padding:30px 107px 30px 40px;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px 1px rgba(45,79,130,0.1);
            border-radius: 10px;
            .form-title{
                display: block;
                position: relative;
                font-weight: 500;
                font-size: 18px;
                color: #333333;
                line-height: 25px;
                margin-bottom: 33px;
                padding-left: 13px;
                &::before{
                    content: '';
                    width: 3px;
                    height: 14px;
                    background: #0167FE;
                    border-radius: 2px; 
                    @include abs(50%,auto,auto,0);
                    transform: translateY(-50%);
                }
            }
            .form-item{
                padding-left: 35px;
                .el-form-item__label{
                    font-weight: 500;
                    font-size: 14px;
                    color: #444;
                }
            }
        }
    }

    .form-option {
        margin-bottom: 80px;

        button {
            width: 88px;
            height: 32px;
        }
    }
}
</style>
