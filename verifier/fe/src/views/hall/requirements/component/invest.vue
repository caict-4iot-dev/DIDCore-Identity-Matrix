<template>
    <div class="form-box">
        <span class="form-title">拟投资信息</span>
        <div class="form-item">
            <el-form-item label="已投资金额：">
                <el-input
                    v-model="state.ruleForm.registerCapital5"
                    placeholder="请输入注册资本"
                >
                    <template #append>万元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="已采用产品：">
                <el-input v-model="state.ruleForm.reTitle4" />
            </el-form-item>
            <el-form-item label="已采用服务商：">
                <el-input v-model="state.ruleForm.reTitle3" />
            </el-form-item>
            <el-form-item label="已实施周期：">
                <el-input v-model="state.ruleForm.reTitle2" />
            </el-form-item>
            <el-form-item label="预计投入资金：">
                <el-input
                    v-model="state.ruleForm.registerCapital1"
                    placeholder="请输入注册资本"
                >
                    <template #append>万元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="预计投入人员：">
                <el-input v-model="state.ruleForm.reTitle1" />
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
