<template>
    <div class="form-box">
        <span class="form-title">基础信息</span>
        <div class="form-item">
            <el-form-item label="需求类型：" prop="reType">
                <el-radio-group v-model="state.ruleForm.reType">
                    <el-radio
                        v-for="(item, index) in state.reTypeRadioOptions"
                        :value="item"
                        :key="index"
                    >
                        {{ item }}
                    </el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="需求名称：" prop="reTitle">
                <el-input v-model="state.ruleForm.reTitle" maxlength="100" show-word-limit />
            </el-form-item>
            <el-form-item label="详细描述：" prop="description">
                <el-input
                    v-model="state.ruleForm.description"
                    :rows="5"
                    type="textarea"
                    placeholder="请输入描述"
                />
            </el-form-item>
            <el-form-item label="所属细分行业：" prop="industry">
                <el-select-v2
                    v-model="state.ruleForm.industry"
                    placeholder="请选择"
                    :options="options"
                />
            </el-form-item>
            <el-form-item label="所属一级场景：" prop="industry">
                <el-select-v2
                    v-model="state.ruleForm.industry1"
                    placeholder="请选择"
                    :options="options"
                />
            </el-form-item>
            <el-form-item label="所属二级场景：" prop="industry">
                <el-select-v2
                    v-model="state.ruleForm.industry3"
                    placeholder="请选择"
                    :options="options"
                />
            </el-form-item>
            <el-form-item label="所属三级场景：" prop="industry">
                <el-select-v2
                    v-model="state.ruleForm.industry2"
                    placeholder="请选择"
                    :options="options"
                />
            </el-form-item>
            <el-form-item label="场景描述：" prop="description">
                <el-input
                    v-model="state.ruleForm.description1"
                    :rows="5"
                    type="textarea"
                    placeholder="请输入描述"
                />
            </el-form-item>
            <el-form-item label="企业名称：" prop="reTitle">
                <el-input v-model="state.ruleForm.reTitle14" maxlength="100" show-word-limit />
            </el-form-item>
            <el-form-item label="企业统一代码：" prop="reTitle">
                <el-input v-model="state.ruleForm.reTitle15" />
            </el-form-item>
            <el-form-item label="企业通讯地址：" prop="reTitle">
                <el-input v-model="state.ruleForm.reTitle13" />
            </el-form-item>
            <el-form-item label="联系人姓名：" prop="reTitle">
                <el-input v-model="state.ruleForm.reTitle12" />
            </el-form-item>
            <el-form-item label="联系人手机号：" prop="reTitle">
                <el-input v-model="state.ruleForm.reTitle11" />
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
