<template>
    <div class="form-box">
        <Title title="所属细分行业" index="4" />
        <div class="form-item">
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="是否为规上企业" prop="isEnterprise">
                        <el-radio-group
                            v-model="state.ruleForm.isEnterprise"
                            style="margin-left: 21px"
                        >
                            <el-radio label="规模以上企业"></el-radio>
                            <el-radio label="规模以下企业"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item
                        label="是否为高新技术企业"
                        prop="IsTechnology"
                    >
                        <el-radio-group
                            v-model="state.ruleForm.IsTechnology"
                            style="margin-left: 21px"
                        >
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="所属细分行业" class="form-item-checkbox">
                <div>
                    根据《2017年国民经济行业分类》，工业软件应用情况（多选）：
                </div>
                <el-form-item prop="developmentClass">
                    <div style="display: flex">
                        <p style="margin-right: 20px">研发设计类：</p>
                        <el-checkbox-group
                            v-model="state.ruleForm.developmentClass"
                        >
                            <el-checkbox
                                style="width: 100px"
                                v-for="itemChild in state.developmentCheckOptions"
                                :label="itemChild"
                                :key="itemChild"
                                :value="itemChild"
                            ></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-form-item>
                <el-form-item prop="productionClass">
                    <div style="display: flex">
                        <p style="margin-right: 20px">生产制造类：</p>
                        <el-checkbox-group
                            v-model="state.ruleForm.productionClass"
                        >
                            <el-checkbox
                                style="width: 100px"
                                v-for="itemChild in state.productionCheckOptions"
                                :key="itemChild"
                                :label="itemChild"
                            ></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-form-item>
                <el-form-item prop="managerClass">
                    <div style="display: flex">
                        <p style="margin-right: 20px">质量管理类：</p>
                        <el-checkbox-group
                            v-model="state.ruleForm.managerClass"
                        >
                            <el-checkbox
                                style="width: 100px"
                                v-for="itemChild in state.managerOptions"
                                :key="itemChild"
                                :label="itemChild"
                            ></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-form-item>
                <el-form-item prop="storeClass">
                    <div style="display: flex">
                        <p style="margin-right: 20px">仓储物流类：</p>
                        <el-checkbox-group v-model="state.ruleForm.storeClass">
                            <el-checkbox
                                style="width: 100px"
                                v-for="itemChild in state.storeOptions"
                                :label="itemChild"
                                :key="itemChild"
                            ></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-form-item>
            </el-form-item>
        </div>
    </div>
</template>

<script setup lang="ts" name="loginAccount">
import { defineAsyncComponent, reactive, toRefs } from 'vue'
// import { ElMessage } from 'element-plus'
// import { uploadImage } from '/@/api/index/index'
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
    options: [],
    developmentCheckOptions: ['CAD', 'CAE', 'CAPP', 'CAM', '数字孪生'],
    productionCheckOptions: ['QMS', 'APS', 'PDM'],
    managerOptions: ['ERP', 'CRM', 'SRM', 'SCM', 'OA', 'BI', 'FMIS'],
    storeOptions: ['BOM', 'WMS']
})
// const initFileUpload = async (request: any) => {
//     let type = request.data.type
//     // const data = await uploadImage({
//     //     image: request.file
//     // })
//     // state.ruleForm[type] = data.data.url
//     // ElMessage({
//     //     message: '上传成功',
//     //     type: 'success'
//     // })
// }
// const beforeUpload = (file: any) => {
//     const fileLimitStr = 'image/png;image/jpg;image/jpeg;image/BMP;image/bmp'
//     const isLimitFile = fileLimitStr.indexOf(file.type) > -1

//     if (!isLimitFile) {
//         ElMessage({
//             message: '文件格式不正确',
//             type: 'error',
//             offset: 73
//         })
//     }

//     return isLimitFile
// }
</script>

<style scoped lang="scss">
.form-item {
    .el-form-item--large {
        margin-bottom: 22px !important;
    }

    .el-input--large {
        width: 520px;
    }
}

:deep(.el-form-item__content) {
    display: block;
}

.upload-box {
    display: flex;
    align-items: center;
    flex-flow: wrap;

    .upload-option {
        margin-right: 21px;

        .upload-cont {
            width: 300px;
            height: 180px;
            border-radius: 12px;
            border: 1px dashed rgba(102, 102, 102, 0.35);
            display: flex;
            justify-content: center;
            align-items: center;

            .upload-opt {
                span {
                    display: block;
                    width: 47px;
                    height: 36px;
                    background: url('/@/assets/images/upload.png') no-repeat
                        center center;
                    background-size: 100% 100%;
                    margin: 0 auto;
                }

                p {
                    font-size: 16px;
                    font-weight: 400;
                    color: #666;
                    line-height: 20px;
                    margin-top: 27px;
                }
            }

            .upload-img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .upload-tips {
        font-size: 12px;
        color: #666;
        line-height: 17px;
    }
}
</style>
