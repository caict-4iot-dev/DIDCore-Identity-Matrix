<template>
    <div class="form-box">
        <Title title="设置账号密码" index="1" />
        <div class="form-item">
            <div class="form-item-div">
                <el-form-item
                    label="手机号"
                    label-width="520px"
                    prop="username"
                >
                    <el-input
                        text
                        placeholder="请输入手机号码"
                        v-model="state.ruleForm.username"
                        clearable
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verificationCode">
                    <el-input
                        type="password"
                        placeholder="请输入手机验证码"
                        v-model="state.ruleForm.verificationCode"
                        autocomplete="off"
                    ></el-input>
                    <el-button
                        type="primary"
                        class="send-code"
                        @click="sendCode"
                        :disabled="state.countPhoneDown !== 0" 
                        size="default"
                    >
                        {{ state.sendPhoneText }}
                    </el-button>
                </el-form-item>
            </div>
            <div class="form-item-div">
                <el-form-item label="密码" prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="state.ruleForm.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword">
                    <el-input
                        type="password"
                        placeholder="请再次输入密码"
                        v-model="state.ruleForm.confirmPassword"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="loginAccount">
import { defineAsyncComponent, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
// 引入组件
const Title = defineAsyncComponent(() => import('./title.vue'))
const props = defineProps({
    ruleForm: {
        type: Object,
        default: () => {}
    }
})

const state = reactive({
    ...toRefs(props),
    countPhoneDown: 0,
    phoneTimer: null as any,
    sendPhoneText: '发送手机验证码'
})
const sendCode = ()=>{
    if(state.ruleForm.username === ''){
        ElMessage.error('请输入手机号')
        return
    }
    if (state.countPhoneDown > 0) {
        return
    }
    sendVerificationCode()
}
const sendVerificationCode = () => {
        if (state.phoneTimer) {
            clearInterval(state.phoneTimer)
        }
        state.countPhoneDown = 60
        state.phoneTimer = setInterval(() => {
            if (state.countPhoneDown !== 0) {
                state.sendPhoneText = `${state.countPhoneDown}s`
                state.countPhoneDown--
            } else {
                state.sendPhoneText = '发送手机验证码'
                clearInterval(state.phoneTimer)
            }
        }, 1000)
}
</script>
Ï

<style scoped lang="scss">
:deep(.el-form-item__content) {
    width: 520px;
}

.form-item {
    width: 1083px;
    //margin:0 auto;
    .form-item-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .send-code {
            position: absolute;
            right: 24px;
            color: #0167fe;
            font-size: 16px;
            line-height: 22px;
            background: none;
            border:0;
            padding:0;
        }
    }
}
</style>
