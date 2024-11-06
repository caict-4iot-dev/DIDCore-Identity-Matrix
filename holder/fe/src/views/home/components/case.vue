<template>
    <div class="index-part5">
        <div class="wrap">
            <titlePage name="标杆案例" />
            <div class="part5-box">
                <swiperPage
                    swiperClass="swiper-part5"
                    :swiperList="state.list"
                    :autoplay="false"
                >
                    <template #item="item">
                        <listPage
                            v-for="(v, i) in item.swiperItem"
                            :key="i"
                            :info="v"
                        />
                    </template>
                </swiperPage>
            </div>
            <div class="more-view">
                <router-link to="/case">
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
import { defineAsyncComponent, reactive, onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { resourceList } from '/@/mock/resource'
const titlePage = defineAsyncComponent(() => import('./title.vue'))
const swiperPage = defineAsyncComponent(
    () => import('/@/components/swiper/index.vue')
)
const listPage = defineAsyncComponent(
    () => import('/@/components/caseList/index.vue')
)
const state = reactive({
    list: [] as any,
    index: 0
})
onMounted(() => {
    state.list = [
        [...resourceList[0].slice(0, 3)],
        [...resourceList[0].slice(0, 3)]
    ]
})
</script>
<style scoped lang="scss">
.index-part5 {
    padding-bottom: 60px;
    .part5-box {
        margin: 0 -12px;
    }
    .swiper-part5 {
        height: 274px;
    }
    .more-view {
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
