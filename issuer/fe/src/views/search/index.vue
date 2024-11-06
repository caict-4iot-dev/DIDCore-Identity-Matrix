<template>
    <div class="container">
        <div class="wrap">
            <div class="container-search">
                    <div>
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
                    </div>
                    </div>
                </div>
            <div class="search-result">
                搜索结果
                <span>{{ state.total }}</span>
                个
            </div>
            <div class="container-content">
                <!-- 服务商 产品 方案-->
                <div
                    class="resource-list"
                    v-if="
                        state.tagIndex === 0 ||
                        state.tagIndex === 2 ||
                        state.tagIndex === 3
                    "
                >
                    <resourcePage
                        v-for="item in state.list"
                        :key="item.id"
                        :info="item"
                    />
                </div>
                <!-- 专家 -->
                <div class="expert-list" v-if="state.tagIndex === 1">
                    <expertPage
                        v-for="item in state.list"
                        :key="item.id"
                        :info="item"
                    />
                </div>
                <!-- 案例 -->
                <div class="case-box" v-if="state.tagIndex === 4">
                    <casePage
                        v-for="item in state.list"
                        :key="item.id"
                        :info="item"
                    />
                </div>
                <!-- 政策 -->
                <ul class="policy-list" v-if="state.tagIndex === 5">
                    <policyPage
                        v-for="(item, index) in state.list"
                        :key="index"
                        :info="item"
                    />
                </ul>
                <pagination
                    v-if="state.list.length"
                    style="margin-top: 30px"
                    :total="state.total"
                    :page="state.listQuery.current"
                    :limit="state.listQuery.size"
                    @pagination="changePagination"
                ></pagination>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="searchDetail">
import { defineAsyncComponent, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { resourceList } from '/@/mock/resource'
import { expertData } from '/@/mock/expert'
import { policyList } from '/@/mock/policy'
const state = reactive({
    keyword: '' as any,
    tagList: ['找服务商', '找专家', '找产品', '找方案', '找案例', '找政策'],
    tagIndex: 0 as any,
    list: [] as any,
    total: 0,
    listQuery: {
        current: 1,
        size: 10,
        keyword: ''
    } as any
})

const resourcePage = defineAsyncComponent(
    () => import('/@/components/hallList/index.vue')
)
const expertPage = defineAsyncComponent(
    () => import('/@/components/expertList/index.vue')
)
const casePage = defineAsyncComponent(
    () => import('/@/components/caseList/index.vue')
)
const policyPage = defineAsyncComponent(
    () => import('/@/components/policyList/index.vue')
)
const route = useRoute()
const chooseHandle = (index: number) => {
    state.tagIndex = index
    state.list = []
    state.keyword = ''
    state.total = 0
}
const changePagination = (params: any) => {
    state.listQuery.current = params.page
    state.listQuery.size = params.limit
    if (params.type === 'size') {
        state.listQuery.current = 1
    }
}
const search = () => {
    switch (state.tagIndex) {
        case 0:
            state.list = resourceList[2]
            break
        case 1:
            state.list = expertData.slice(
                (state.listQuery.current - 1) * state.listQuery.size,
                state.listQuery.current * state.listQuery.size
            )
            break
        case 2:
            state.list = resourceList[0].slice(
                (state.listQuery.current - 1) * state.listQuery.size,
                state.listQuery.current * state.listQuery.size
            )
            break
        case 3:
            state.list = resourceList[1].slice(
                (state.listQuery.current - 1) * state.listQuery.size,
                state.listQuery.current * state.listQuery.size
            )
            break
        case 4:
            state.list = resourceList[0].slice(
                (state.listQuery.current - 1) * state.listQuery.size,
                state.listQuery.current * state.listQuery.size
            )
            break
        case 5:
            state.list = policyList[0].slice(
                (state.listQuery.current - 1) * state.listQuery.size,
                state.listQuery.current * state.listQuery.size
            )
            break
    }
    state.total = state.list.length
}
onMounted(() => {
    state.keyword = route.query.keyword
    state.tagIndex = Number(route.query.type)
    search()
})
</script>

<style scoped lang="scss">
.container {
    background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);

    .search-result {
        font-weight: 500;
        font-size: 16px;
        color: #333333;
        margin-top: 20px;
        span {
            color: #0167fe;
        }
    }

    .container-search {
        padding: 30px 40px;
        margin-top: 30px;
        background: #edf5ff;
        border-radius: 10px;
        border: 1px solid rgba(152, 163, 183, 0.2);
        display: flex;
        justify-content: center;

        .search-tag {
            margin-top: 6px;
            display: flex;
            margin-bottom: 8px;
            padding-left: 22px;

            span {
                display: inline-block;
                padding: 5px 8px;
                margin-right: 8px;
                font-weight: 400;
                font-size: 12px;
                color: #6D7280;
                cursor: pointer;

                &.active,
                &:hover {
                    position: relative;
                    color: #fff;
                    background: #237bfe;
                    border-radius: 4px;

                    &::before {
                        content: '';
                        position: absolute;
                        //background-color: #237BFE;
                        bottom: -4px;
                        left: 8px;
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
                        border-top: 6px solid #237bfe; /* 下三角的颜色 */
                    }
                }
            }
        }

        .search-box {
            width: 840px;
            height: 48px;

            .el-input {
                height: 100%;
                box-shadow: none;

                :deep(.el-input__wrapper) {
                    border-radius: 24px;
                    padding: 0 0 0 30px;

                    .el-input__suffix {
                        width: 144px;
                        height: 100%;
                        background: #0167fe;
                        border-radius: 0 24px 24px 0;

                        .el-input__suffix-inner {
                            width: 100%;
                        }

                        .el-button {
                            width: 100%;
                            height: 28px;
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
    }

    .container-content {
        .resource-list,
        .expert-list,
        .case-box {
            display: flex;
            flex-flow: wrap;
            padding: 30px 0;
            margin: 0 -10px;
        }
        .case-box {
            margin: 0 -12px;
        }
    }
}
</style>
