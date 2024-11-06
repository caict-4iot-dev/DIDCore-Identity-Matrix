<template>
    <div class="train">
        <TitleHeader
            name="课程培训"
            :bg="getAssetURL('train-banner.png')"
        ></TitleHeader>
        <div class="wrap train-container">
            <div class="train-box">
                <listPage
                    v-for="item in state.list"
                    :key="item.id"
                    :info="item"
                />
            </div>
            <pagination
                :total="state.total"
                :page="state.listQuery.current"
                :limit="state.listQuery.size"
                @pagination="changePagination"
            ></pagination>
        </div>
    </div>
</template>

<script setup lang="ts" name="trainIndex">
import { defineAsyncComponent, reactive, onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
const listPage = defineAsyncComponent(
    () => import('/@/components/trainList/index.vue')
)
import { trainList } from '/@/mock/train'
const state = reactive({
    loading: false,
    total: 0,
    listQuery: {
        current: 1,
        size: 6
    },
    list: [] as any
})
const changePagination = (params: any) => {
    state.listQuery.current = params.page
    state.listQuery.size = params.limit
    if (params.type === 'size') {
        state.listQuery.current = 1
    }
    state.list = trainList.slice(
        (state.listQuery.current - 1) * state.listQuery.size,
        state.listQuery.current * state.listQuery.size
    )
}
onMounted(() => {
    state.list = trainList.slice(
        (state.listQuery.current - 1) * state.listQuery.size,
        state.listQuery.current * state.listQuery.size
    )
    state.total = trainList.length
})
</script>

<style scoped lang="scss">
.train {
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
    .train-box {
        padding: 30px 0 20px;
        margin: 0 -10px;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
