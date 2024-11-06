<template>
    <div class="form-box">
        <span class="form-title">诉求信息</span>
        <div class="form-item"> 
            <el-form-item label="拟实施数转方向：">
                <el-input v-model="state.ruleForm.reTitle26" />
            </el-form-item>
            <el-form-item label="拟采用服务商：">
                <el-input v-model="state.ruleForm.reTitle25" />
            </el-form-item>
            <el-form-item label="拟采用产品：">
                <el-input v-model="state.ruleForm.reTitle24" />
            </el-form-item>
            <el-form-item label="期望服务商支撑事项：">
                <el-input v-model="state.ruleForm.reTitle23" />
            </el-form-item>
            <el-form-item label="期望政府支撑事项：">
                <el-input v-model="state.ruleForm.reTitle22" />
            </el-form-item>
            <el-form-item label="期望实施周期：">
                <el-input v-model="state.ruleForm.reTitle21" />
            </el-form-item>
        </div>
    </div>
</template>

<script setup lang="ts" name="loginAccount">
import { reactive, toRefs } from 'vue'
// 引入组件
const props = defineProps({
    ruleForm: {
        type: Object,
        default: () => {}
    }
})
const state = reactive({
    ...toRefs(props),
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
    ]
})
const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`
}))
</script>
Ï

<style scoped lang="scss">
:deep(.el-form-item__content) {
    width: 520px;
}
</style>
