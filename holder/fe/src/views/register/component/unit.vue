<template>
    <div class="form-box">
        <Title title="完善单位信息" index="2" />
        <div class="form-item">
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="企业编码" prop="unitCode">
                        <el-input
                            text
                            placeholder="请输入企业编码"
                            v-model="state.ruleForm.unitCode"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="企业名称" prop="unitName">
                        <el-input
                            text
                            placeholder="请输入企业名称"
                            v-model="state.ruleForm.unitName"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="企业统一代码" prop="unitUnifyCode">
                        <el-input
                            text
                            placeholder="请输入企业统一代码"
                            v-model="state.ruleForm.unitUnifyCode"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="企业注册地址" prop="unitSignAddress">
                        <el-input
                            text
                            placeholder="请输入企业注册地址"
                            v-model="state.ruleForm.unitSignAddress"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="企业性质" prop="unitNature">
                        <el-select
                            v-model="state.ruleForm.unitNature"
                            placeholder="请选择"
                            style="width: 260px"
                        >
                            <el-option
                                v-for="item in entTypeArray"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="企业通讯地址" prop="unitPhoneAddress">
                        <el-select
                            v-model="state.ruleForm.unitPhoneAddress"
                            placeholder="请选择"
                            style="width: 520px"
                        >
                            <el-option
                                v-for="item in entTypeArray"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="企业类型" prop="unitType">
                        <el-select
                            v-model="state.ruleForm.unitType"
                            placeholder="请选择"
                            style="width: 520px"
                        >
                            <el-option
                                v-for="item in state.entIndustryList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="企业规模" prop="unitScale">
                        <el-select
                            v-model="state.ruleForm.unitScale"
                            placeholder="请选择"
                            style="width: 260px"
                        >
                            <el-option
                                v-for="item in entTypeArray"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="注册机关" prop="registerOrgan">
                        <el-input
                            text
                            placeholder="请输入注册机关"
                            v-model="state.ruleForm.registerOrgan"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="注册资本" prop="registerCapital">
                        <el-input
                            v-model="state.ruleForm.registerCapital"
                            placeholder="请输入注册资本"
                        >
                            <template #append>万元</template>
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="成立日期" prop="establishTime">
                        <el-date-picker
                            v-model="state.ruleForm.establishTime"
                            type="date"
                            format="YYYY-MM-DD"
                            value-format="YYYY-MM-DD"
                            placeholder="请选择成立日期"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="有效期" prop="expireTime">
                        <el-date-picker
                            v-model="state.ruleForm.expireTime"
                            type="date"
                            format="YYYY-MM-DD"
                            value-format="YYYY-MM-DD"
                            placeholder="请选择有效期"
                        />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item label="官方网站" prop="officialWebsite">
                        <el-input
                            text
                            placeholder="请输入官方网站"
                            v-model="state.ruleForm.officialWebsite"
                            clearable
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单位简介" prop="unitIntroduce">
                        <el-input
                            v-model="state.ruleForm.unitIntroduce"
                            :rows="4"
                            type="textarea"
                            clearable
                            placeholder="请输入单位简介"
                        />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="12">
                    <el-form-item
                        label="单位证件照片"
                        prop="unitCertPictureUrl"
                    >
                        <div class="upload-box">
                            <el-upload
                                class="upload-option"
                                :http-request="initFileUpload"
                                :show-file-list="false"
                                :before-upload="beforeUpload"
                                :limit="1"
                                :data="{ type: 'unitCertPictureUrl' }"
                            >
                                <div class="upload-cont">
                                    <div
                                        class="upload-opt"
                                        v-if="
                                            !state.ruleForm.unitCertPictureUrl
                                        "
                                    >
                                        <span></span>
                                        <p>点击上传</p>
                                    </div>
                                    <img
                                        v-else
                                        class="upload-img"
                                        :src="state.ruleForm.unitCertPictureUrl"
                                        alt=""
                                    />
                                </div>
                            </el-upload>
                            <div class="upload-tips">
                                注意事项：
                                <br />
                                支持.jpg .jpeg .png .bmp 4种格式
                            </div>
                        </div>
                    </el-form-item>
                </el-col>
                <el-col :span="12"></el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts" name="loginAccount">
import { defineAsyncComponent, onMounted, reactive, toRefs } from 'vue'
import { ElMessage } from 'element-plus'
import industry from '/@/mock/industry.json'
// import threeLevelLinkageJson from '/@/mock/threeLevelLinkage.json'
// import { uploadImage } from '/@/api/index/index'
import { entTypeArray } from '/@/mock/index'
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
    entTradeList: [] as any,
    entIndustryList: [] as any,
    industryArray: [] as any
})
const initFileUpload = async (request: any) => {
    let type = request.data.type
    // console.log("🚀 ~ file:", type)

    // const data = await uploadImage({
    //     image: request.file
    // })
    state.ruleForm[type] = request.file
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
const initIndustryList = () => {
    //行业类型
    let entIndustryLists = []
    let industryAllValue = industry.all
    for (let key of Object.keys(industryAllValue)) {
        entIndustryLists.push({ key, value: industryAllValue[key] })
    }
    state.entIndustryList = entIndustryLists
    for (let key of Object.keys(industry)) {
        state.industryArray.push({ key, value: industry[key] })
    }
}
// const onEntIndustryChange = (key: string) => {
//     state.ruleForm.entTrade = ''
//     state.entTradeList = []
//     state.industryArray.map((v: any) => {
//         if (v.key === key) {
//             let lowValue = v.value
//             for (let k of Object.keys(lowValue)) {
//                 state.entTradeList.push({key: k, value: lowValue[k]})
//             }
//         }
//     })
// }
onMounted(() => {
    initIndustryList()
})
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
        margin-left: 21px;
    }
}
</style>
