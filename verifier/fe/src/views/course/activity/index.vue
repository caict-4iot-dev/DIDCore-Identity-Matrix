<template>
    <div class="activity">
        <TitleHeader
            name="活动中心"
            :bg="getAssetURL('activity-banner.png')"
        ></TitleHeader>
        <TabPage
            :list="state.tabList"
            :type="state.index"
            @chooseHandle="chooseHandle"
        />
        <div class="wrap" v-loading="state.loading">
            <ul class="activity-list">
                <li
                    class="list-item"
                    v-for="(item, index) in state.list"
                    :key="index"
                >
                    <a :href="`/course/activity/detail?type=${state.index}`">
                        <img
                            class="item-img"
                            v-lazyload="{
                                url: item.pic,
                                error: getAssetURL('defult-3.png')
                            }"
                            alt=""
                        />

                        <div class="item-box">
                            <div class="item-info">
                                <div class="info-box">
                                    <h3 class="info-title">{{ item.title }}</h3>
                                    <span class="info-time">
                                        时间:2024-08-09 18:00:00
                                    </span>
                                </div>
                                <span
                                    class="info-btn"
                                    :class="{
                                        'btn-end': item.type === 2,
                                        'btn-agin': item.type === 1
                                    }"
                                >
                                    {{
                                        item.type === 1
                                            ? '进行中'
                                            : item.type === 2
                                            ? '已结束'
                                            : '报名中'
                                    }}
                                </span>
                            </div>
                            <ol class="item-desc">
                                <li>地点:{{ item.address }}</li>
                                <li>主办方:{{ item.unite }}</li>
                                <li>人数:{{ item.num.number }}</li>
                                <li>费用:{{ item.price.number }}</li>
                            </ol>
                        </div>
                    </a>
                </li>
            </ul>
            <pagination
                style="padding: 0 24px"
                :total="state.total"
                :page="state.listQuery.current"
                :limit="state.listQuery.size"
                @pagination="changePagination"
            ></pagination>
        </div>
    </div>
</template>

<script setup lang="ts" name="activityIndex">
import { defineAsyncComponent, reactive, onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { activityList } from '/@/mock/activity'
import { useRoute } from 'vue-router'
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
const TabPage = defineAsyncComponent(
    () => import('/@/components/tab/index.vue')
)
const route = useRoute()
const state = reactive({
    loading: false,
    total: 0,
    listQuery: {
        current: 1,
        size: 20
    },
    tabList: [
        {
            name: '全部活动'
        },
        {
            name: '进行中'
        },
        {
            name: '已结束'
        }
    ],
    list: [] as any,
    index: 0
})
const changePagination = (params: any) => {
    state.listQuery.current = params.page
    state.listQuery.size = params.limit
    if (params.type === 'size') {
        state.listQuery.current = 1
    }
}
const chooseHandle = (index: number) => {
    state.index = index
    state.list = []
    setTimeout(() => {
        if (index === 0) {
            state.list = activityList
        } else {
            state.list = activityList.filter((item) => {
                return item.type === index
            })
        }
    }, 100)

    state.total = state.list.length
}
onMounted(() => {
    state.index = (Number(route.query.type) as number) || 0
    state.total = activityList.length
    state.list = activityList
})
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.activity {
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 300px;
        background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
        opacity: 0.8;
        position: absolute;
        left: 0;
        top: 150px;
    }
    .wrap {
        position: relative;
        z-index: 2;
    }
}
.activity-list {
    padding: 19px 0 50px;
    .list-item {
        padding: 30px 0 26px;
        border-bottom: 1px solid rgba(152, 163, 183, 0.2);
        a {
            display: flex;
            justify-content: space-between;
            .item-img {
                width: 170px;
                height: 125px;
                border-radius: 10px;
            }
            .item-box {
                width: calc(100% - 199px);
                .item-info {
                    display: flex;
                    justify-content: space-between;
                    color: #333333;
                    padding-top: 9px;
                    .info-title {
                        font-weight: 600;
                        font-size: 18px;
                        line-height: 25px;
                        margin-bottom: 20px;
                        @include text-no-wrap();
                    }
                    .info-time {
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 22px;
                    }
                    .info-btn {
                        height: 42px;
                        background: #0167fe;
                        border-radius: 8px;
                        font-size: 16px;
                        color: #ffffff;
                        line-height: 42px;
                        padding: 0 33px;
                        &.btn-end {
                            background: #98a3b7;
                        }
                        &.btn-agin {
                            background: #ff5e5e;
                        }
                    }
                }

                .item-desc {
                    display: flex;
                    margin-top: 20px;
                    li {
                        font-size: 14px;
                        color: #6d7280;
                        line-height: 20px;
                        margin-right: 60px;
                    }
                }
            }
        }
    }
}
</style>
