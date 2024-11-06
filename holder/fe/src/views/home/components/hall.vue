<template>
    <div class="index-part4">
        <div class="wrap">
            <titlePage
                name="供需大厅"
                :list="state.titleList"
                @chooseTab="chooseTab"
            />
            <div class="part4-box">
                <div class="hall-list" v-for="(v, i) in state.list" :key="i">
                    <swiperPage
                        swiperClass="swiper-part4"
                        :swiperList="v"
                        :autoplay="false"
                        v-if="i === state.index"
                    >
                        <template #item="item">
                            <listPage
                                v-for="(k, y) in item.swiperItem"
                                :key="y"
                                :info="k"
                                :type="state.index"
                            />
                        </template>
                    </swiperPage>
                </div>
            </div>
            <div class="hall-view">
                <router-link to="/hall/resource">
                    查看更多
                    <svgIcon
                        :name="getAssetURL('icon/arrow-right.svg')"
                        :size="16"
                        color="#0167FE"
                        class="icon-arrow-right"
                    />
                </router-link>
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
const listPage = defineAsyncComponent(
    () => import('/@/components/hallList/index.vue')
)
import { resourceList } from '/@/mock/resource'
const state = reactive({
    titleList: ['数转产品', '数转方案', '数转机构'] as any,
    list: [] as any,
    index: 0
})
const chooseTab = (index: number) => {
    state.list = [[]]
    state.list = [
        [
            [...resourceList[index].slice(0, 4)],
            [...resourceList[index].slice(0, 4)]
        ]
    ]
}
onMounted(() => {
    state.list = [
        [[...resourceList[0].slice(0, 4)], [...resourceList[0].slice(0, 4)]]
    ]
})
</script>
<style scoped lang="scss">
.index-part4 {
    padding-bottom: 60px;
    background: url('/@/assets/images/part-bg.png') no-repeat;
    background-size: 100% 100%;
    .swiper-part4 {
        height: 399px;
    }
    .hall-list {
        margin: 0 -10px;
    }
    .hall-view {
        margin-top: 30px;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 400;
            font-size: 16px;
            color: #0167fe;
            line-height: 22px;
            .icon-arrow-right {
                margin-left: 4px;
            }
        }
    }
}
</style>
