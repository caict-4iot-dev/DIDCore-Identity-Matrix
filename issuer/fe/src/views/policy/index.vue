<template>
    <div class="policy">
        <TitleHeader
            name="政策资讯"
            :bg="getAssetURL('policy-banner.png')"
        ></TitleHeader>
        <TabPage
            :list="state.tabList"
            :type="state.index"
            @chooseHandle="chooseHandle"
        />
        <div class="wrap" v-loading="state.loading">
            <ul class="policy-list">
                <policyPage
                    v-for="(item, index) in state.list"
                    :key="index"
                    :info="item"
                    :type="state.index"
                />
            </ul>
            <pagination
                :total="state.total"
                :page="state.listQuery.current"
                :limit="state.listQuery.size"
                @pagination="changePagination"
            ></pagination>
        </div>
    </div>
</template>

<script setup lang="ts" name="policyIndex">
import { defineAsyncComponent, reactive, onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { policyList } from '/@/mock/policy'
import { useRoute } from 'vue-router'
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
const TabPage = defineAsyncComponent(
    () => import('/@/components/tab/index.vue')
)
const policyPage = defineAsyncComponent(
    () => import('/@/components/policyList/index.vue')
)
const route = useRoute()
const state = reactive({
    loading: false,
    total: 3,
    listQuery: {
        current: 1,
        size: 10
    },
    tabList: [
        {
            name: '政策信息'
        },
        {
            name: '通知公告'
        },
        {
            name: '新闻资讯'
        }
    ],
    list: policyList[0],
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
        state.list = policyList[index]
        state.total = policyList[index].length
    }, 100)
}
onMounted(() => {
    state.index = (Number(route.query.type) as number) || 0
    state.list = policyList[0]
    state.total = policyList[0].length
})
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.policy {
    position: relative;
    &::before {
        content: '';
        width: 100%;
        height: 300px;
        background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
        opacity: 0.8;
        @include abs(150px, auto, auto, 0);
    }
    .wrap {
        position: relative;
        z-index: 1;
    }
    .policy-list {
        padding: 20px 0 53px;
    }
}
</style>
