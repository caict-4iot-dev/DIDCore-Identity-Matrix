<template>
    <div class="form-box">
        <Title title="完善法人信息" index="3" />
        <div class="form-item">
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="法定代表人姓名" prop="legalName">
                        <el-input
                            text
                            placeholder="请输入法定代表人姓名"
                            v-model="state.ruleForm.legalName"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item
                        label="法定代表人证件类型"
                        prop="legalCardType"
                    >
                        <el-select
                            v-model="state.ruleForm.legalCardType"
                            placeholder="请选择法定代表人证件类型"
                            style="width: 260px"
                        >
                            <el-option label="中国居民身份证" value="1" />
                            <el-option label="护照" value="2" />
                            <el-option label="其他" value="3" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="法定代表人手机号" prop="legalPhone">
                        <el-input
                            text
                            placeholder="请输入法定代表人手机号"
                            v-model="state.ruleForm.legalPhone"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人证件号" prop="legalCard">
                        <el-input
                            text
                            placeholder="请输入法定代表人证件号"
                            v-model="state.ruleForm.legalCard"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="法定代表人传真" prop="legalFax">
                        <el-input
                            text
                            placeholder="请输入法定代表人传真"
                            v-model="state.ruleForm.legalFax"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人邮箱" prop="legalEmail">
                        <el-input
                            text
                            placeholder="请输入法定代表人邮箱"
                            v-model="state.ruleForm.legalEmail"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="24">
                    <el-form-item>
                        <template #label>
                            <i style="color: #f56c6c">*</i>
                            &nbsp;法定代表人证件照片
                        </template>
                        <div class="upload-box">
                            <el-form-item prop="legalCardPic1Url">
                                <el-upload
                                    class="upload-option"
                                    :http-request="initFileUpload"
                                    :show-file-list="false"
                                    :before-upload="beforeUpload"
                                    :limit="1"
                                    :data="{ type: 'legalCardPic1Url' }"
                                >
                                    <div class="upload-cont">
                                        <div
                                            class="upload-opt"
                                            v-if="
                                                !state.ruleForm.legalCardPic1Url
                                            "
                                        >
                                            <span></span>
                                            <p>点击上传-人像面</p>
                                        </div>
                                        <img
                                            v-else
                                            class="upload-img"
                                            :src="
                                                state.ruleForm.legalCardPic1Url
                                            "
                                            alt=""
                                        />
                                    </div>
                                </el-upload>
                            </el-form-item>
                            <el-form-item prop="legalCardPic2Url">
                                <el-upload
                                    class="upload-option"
                                    :http-request="initFileUpload"
                                    :show-file-list="false"
                                    :before-upload="beforeUpload"
                                    :limit="1"
                                    :data="{ type: 'legalCardPic2Url' }"
                                >
                                    <div class="upload-cont">
                                        <div
                                            class="upload-opt"
                                            v-if="
                                                !state.ruleForm.legalCardPic2Url
                                            "
                                        >
                                            <span></span>
                                            <p>点击上传-国徽面</p>
                                        </div>
                                        <img
                                            class="upload-img"
                                            v-else
                                            :src="
                                                state.ruleForm.legalCardPic2Url
                                            "
                                            alt=""
                                        />
                                    </div>
                                </el-upload>
                            </el-form-item>
                            <div class="upload-tips">
                                注意事项：
                                <br />
                                支持.jpg .jpeg .png .bmp
                                <br />
                                身份证的人像面请传入左框
                                <br />
                                身份证的国徽面请传入右框
                            </div>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts" name="loginAccount">
import { defineAsyncComponent, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
// 引入组件
const Title = defineAsyncComponent(() => import('./title.vue'))
// import { uploadImage } from '/@/api/index/index'
const props = defineProps({
    ruleForm: {
        type: Object,
        default: () => {}
    }
})
const state = reactive({
    ...toRefs(props),
    options: []
})
const initFileUpload = async (request: any) => {
    let type = request.data.type
    // console.log('🚀 ~ initFileUpload ~ type:', type)

    // const data = await uploadImage({
    //     image: request.file
    // })
    state.ruleForm[type] = request.data.url
    // ElMessage({
    //     message: '上传成功',
    //     type: 'success'
    // })
}
const beforeUpload = (file: any) => {
    const fileLimitStr = 'image/png;image/jpg;image/jpeg;image/BMP;image/bmp'
    const isLimitFile = fileLimitStr.indexOf(file.type) > -1

    if (!isLimitFile) {
        ElMessage({
            message: '文件格式不正确',
            type: 'error',
            offset: 73
        })
    }

    return isLimitFile
}
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
