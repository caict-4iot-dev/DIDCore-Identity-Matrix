<template>
    <div class="index-part6">
        <div class="wrap">
            <titlePage name="专家团队" />
            <div class="part6-box">
                <listPage
                    v-for="item in state.list"
                    :key="item.id"
                    :info="item"
                />
            </div>
            <div class="more-view">
                <router-link to="/expert">
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
const titlePage = defineAsyncComponent(() => import('./title.vue'))
const listPage = defineAsyncComponent(
    () => import('/@/components/expertList/index.vue')
)
import { expertData } from '/@/mock/expert'
const state = reactive({
    listQuery: {
        current: 1,
        size: 4
    },
    list: [] as any
})
onMounted(() => {
    state.list = expertData.slice(
        (state.listQuery.current - 1) * state.listQuery.size,
        state.listQuery.current * state.listQuery.size
    )
})
</script>
<style scoped lang="scss">
.index-part6 {
    padding-bottom: 60px;
    background: url('/@/assets/images/part-bg.png') no-repeat;
    background-size: 100% 100%;
    .part6-box {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px;
    }
    .more-view {
        margin-top: 10px;
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
