<template>
    <div class="index-part2">
        <div class="wrap">
            <titlePage
                name="政策资讯"
                :list="state.titleList"
                @chooseTab="chooseTab"
            />
            <div class="part2-box">
                <div class="box-list">
                    <div class="policy-l">
                        <swiperPage
                            swiperClass="swiper-part2"
                            :swiperList="state.swiperList"
                        >
                            <template #item="item">
                                <div class="policy-item">
                                    <h3>{{ item.swiperItem.title }}</h3>
                                    <a href="/policy/detail">了解详情</a>
                                    <p>发布时间：{{ item.swiperItem.time }}</p>
                                </div>
                            </template>
                        </swiperPage>
                    </div>
                    <ul class="policy-r">
                        <li
                            v-for="(item, index) in state.swiperList"
                            :key="index"
                        >
                            <a href="/policy/detail">
                                <div class="list-tag">
                                    <span>政策{{ state.tags[index] }}</span>
                                    <em>
                                        <b>2023</b>
                                        03-04
                                    </em>
                                </div>
                                <div class="list-desc">
                                    <h3>
                                        {{ item.title }}
                                    </h3>
                                    <p>
                                        {{ item.time }}
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <router-link to="/policy">
                                查看更多
                                <svgIcon
                                    :name="getAssetURL('icon/arrow-right.svg')"
                                    :size="16"
                                    color="#0167FE"
                                    class="icon-arrow-right"
                                />
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="assess">
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { defineAsyncComponent, reactive, onMounted } from 'vue'
const titlePage = defineAsyncComponent(() => import('./title.vue'))
const swiperPage = defineAsyncComponent(
    () => import('/@/components/swiper/index.vue')
)
import { policyList } from '/@/mock/policy'
const state = reactive({
    swiperList: [] as any,
    titleList: ['政策信息', '通知公告', '新闻资讯'],
    tags: ['一', '二', '三']
})
const chooseTab = (index: number) => {
    state.swiperList = policyList[index].slice(0, 3)
}
onMounted(() => {
    state.swiperList = policyList[0].slice(0, 3)
})
</script>
<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.index-part2 {
    margin-top: -76px;
    padding: 76px 0 60px;
    background: url('/@/assets/images/part-bg.png') no-repeat;
    background-size: 100% 100%;
    .box-list {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .policy-l {
            width: 590px;
            height: 442px;
            border-radius: 10px;
            background: url('/@/assets/images/policy-bg.png') no-repeat;
            background-size: 100% 100%;
            .policy-item {
                padding: 48px 170px 0 60px;
                h3 {
                    font-weight: 500;
                    font-size: 24px;
                    color: #333333;
                    line-height: 40px;
                    margin-bottom: 40px;
                    @include text-ellipsis(3);
                }
                a {
                    display: block;
                    width: 120px;
                    height: 42px;
                    background: #0167fe;
                    border-radius: 21px;
                    font-weight: 500;
                    font-size: 18px;
                    color: #ffffff;
                    line-height: 42px;
                    text-align: center;
                }
                p {
                    font-weight: 400;
                    font-size: 18px;
                    color: #6d7280;
                    line-height: 31px;
                    margin-top: 60px;
                }
            }
            .swiper-part2 {
                height: 394px;
                :deep(.swiper-pagination) {
                    width: auto;
                    left: 60px;
                }
            }
        }
        .policy-r {
            padding: 0 30px;
            width: 590px;
            height: 442px;
            background: #ffffff;
            box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
            border-radius: 10px;
            li {
                padding: 24px 0 20px;
                border-bottom: 1px solid rgba(152, 163, 183, 0.2);
                a {
                    display: flex;
                    justify-content: space-between;
                }
                .list-tag {
                    width: 80px;
                    text-align: center;
                    span {
                        display: block;
                        width: 80px;
                        height: 30px;
                        background: rgba(1, 103, 254, 0.15);
                        border-radius: 4px;
                        font-size: 16px;
                        color: #0167fe;
                        line-height: 30px;
                        text-align: center;
                    }
                    em {
                        margin: 12px auto 0;
                        display: block;
                        font-size: 14px;
                        color: #6d7280;
                        line-height: 20px;
                    }
                    b {
                        display: block;
                        font-size: 18px;
                        font-weight: normal;
                    }
                }
                .list-desc {
                    width: calc(100% - 108px);
                    h3 {
                        font-weight: 500;
                        font-size: 18px;
                        color: #333333;
                        line-height: 25px;
                        @include text-no-wrap();
                    }
                    p {
                        font-size: 16px;
                        color: #6d7280;
                        line-height: 22px;
                        margin-top: 15px;
                        @include text-ellipsis(2);
                    }
                }
                &:last-child {
                    border-bottom: none;
                    padding: 14px 0 18px;
                    a {
                        justify-content: right;
                        font-size: 16px;
                        color: #0167fe;
                        line-height: 22px;
                        align-items: center;
                        .icon-arrow-right {
                            margin-left: 4px;
                        }
                    }
                }
            }
        }
    }
}
</style>
