<template>
    <div class="expert">
        <div class="expert-container">
            <TitleHeader
                name="专家团队"
                :bg="getAssetURL('assess/banner.png')"
            ></TitleHeader>
            <div class="wrap" v-loading="state.loading">
                <div class="expert-list">
                    <listPage
                        v-for="item in state.list"
                        :key="item.id"
                        :info="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="expertIndex">
import { defineAsyncComponent, reactive, onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
const listPage = defineAsyncComponent(
    () => import('/@/components/expertList/index.vue')
)
import { expertData } from '/@/mock/expert'
const state = reactive({
    loading: false,
    total: 0,
    listQuery: {
        current: 1,
        size: 8
    },
    list: [] as any
})
onMounted(() => {
    state.list = expertData.slice(
        (state.listQuery.current - 1) * state.listQuery.size,
        state.listQuery.current * state.listQuery.size
    )
    state.total = expertData.length
})
</script>

<style scoped lang="scss">
.expert {
    position: relative;
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
    &-container {
        position: relative;
        z-index: 1;
    }
    .expert-list {
        padding: 30px 0;
        margin: 0 -10px;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
