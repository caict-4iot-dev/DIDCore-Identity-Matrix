<template>
    <div class="home-container">
        <!-- 首页bannner内容 -->
        <div class="home-banner">
            <div class="wrap banner-box">
                <div class="banner-top">
                    <h2 class="banner-title">智能匹配</h2>
                    <p class="banner-des">
                        利用人工智能、NLP自然语言处理等技术手段，输入需求文本内容,即可一键匹配所需创新资源
                    </p>
                </div>
                <div class="banner-search">
                    <div class="search-tag">
                        <span
                            :class="{ active: state.tagIndex === index }"
                            v-for="(item, index) in state.tagList"
                            @click="chooseHandle(index)"
                            :key="index"
                        >
                            {{ item }}
                        </span>
                    </div>
                    <div class="search-box">
                        <el-input
                            v-model="state.keyword"
                            placeholder="请详细描述您的需求内容，建议字数不少于15字"
                        >
                            <template #suffix>
                                <el-button link @click="search">
                                    智能匹配
                                </el-button>
                            </template>
                        </el-input>
                        <p class="search-des">
                            示例：“寻找数字化转型专家”
                        </p>
                    </div>
                    <div class="banner-img">
                        <img :src="getAssetURL('flow-1.png')" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 数据统计展示 -->
        <flowPage />
        <!-- 政策资讯 -->
        <policyPage />
        <!-- 评估诊断 -->
        <assessPage />
        <!-- 供需大厅 -->
        <hallPage />
        <!-- 标杆案例 -->
        <casePage />
        <!-- 专家团队 -->
        <expertPage />
        <!-- 活动培训 -->
        <coursePage />
    </div>
</template>

<script setup lang="ts" name="homeIndex">
import { defineAsyncComponent, reactive } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { useRouter } from 'vue-router'

const assessPage = defineAsyncComponent(() => import('./components/assess.vue'))
const flowPage = defineAsyncComponent(() => import('./components/flow.vue'))
const policyPage = defineAsyncComponent(() => import('./components/policy.vue'))
const hallPage = defineAsyncComponent(() => import('./components/hall.vue'))
const casePage = defineAsyncComponent(() => import('./components/case.vue'))
const expertPage = defineAsyncComponent(() => import('./components/expert.vue'))
const coursePage = defineAsyncComponent(() => import('./components/course.vue'))
const router = useRouter()
const state = reactive({
    keyword: '',
    tagList: ['找服务商', '找专家', '找产品', '找方案', '找案例', '找政策'],
    tagIndex: 0
})
const chooseHandle = (index: number) => {
    state.tagIndex = index
}
const search = () => {
    router.push({
        path: '/search',
        query: {
            keyword: state.keyword,
            type: state.tagIndex
        }
    })
}
</script>

<style scoped lang="scss">
.home-banner {
    width: 100%;
    padding-top: 60px;
    height: 540px;
    background: url('../../assets/images/banner.png') no-repeat;
    background-size: cover;
    text-align: center;

    .banner {
        &-title {
            font-weight: 500;
            font-size: 30px;
            color: #fff;
            line-height: 42px;
        }

        &-des {
            font-weight: 400;
            font-size: 16px;
            color: #c7d4eb;
            line-height: 22px;
            margin: 20px 0 50px;
        }

        &-search {
            width: 840px;
            text-align: left;
            margin: 0 auto;

            .search-tag {
                display: flex;
                margin-bottom: 8px;
                padding-left: 22px;

                span {
                    display: inline-block;
                    padding: 5px 8px;
                    margin-right: 8px;
                    font-weight: 400;
                    font-size: 16px;
                    color: #c7d4eb;
                    cursor: pointer;

                    &.active,
                    &:hover {
                        position: relative;
                        color: #0167fe;
                        background: #fff;
                        border-radius: 4px;

                        &::before {
                            content: '';
                            position: absolute;
                            bottom: -4px;
                            left: 8px;
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            border-top: 6px solid #fff; /* 下三角的颜色 */
                        }
                    }
                }
            }

            .search-box {
                .el-input {
                    height: 48px;
                    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);

                    :deep(.el-input__wrapper) {
                        border-radius: 24px;
                        padding: 0 0 0 30px;

                        .el-input__suffix {
                            width: 144px;
                            height: 100%;
                            background: #0167fe;
                            border-radius: 0 24px 24px 0;
                            margin-right: -1px;
                            .el-input__suffix-inner {
                                width: 100%;
                            }

                            .el-button {
                                width: 100%;
                                height: 48px;
                                text-align: center;
                                font-size: 16px;
                                color: #fff;
                            }
                        }
                    }
                }

                .search-des {
                    font-weight: 400;
                    font-size: 14px;
                    color: #98a3b7;
                    line-height: 20px;
                    margin: 10px 0 0 30px;
                }
            }

            .banner-img {
                width: 528px;
                height: 66px;
                margin: 51px auto 0;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>
