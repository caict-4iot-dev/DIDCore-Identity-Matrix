<template>
    <div class="resource">
        <TitleHeader
            name="数转资源"
            :bg="getAssetURL('resource-banner.png')"
        ></TitleHeader>
        <TabPage
            :list="state.tabList"
            @chooseHandle="chooseHandle"
            :type="state.index"
        />
        <div class="wrap">
            <screenPage
                :list="state.screenList"
                :type="state.type"
                @handleEnter="handleEnter"
                @handleTag="handleTag"
            />
            <div v-if="state.list.length">
                <div class="resource-list" v-loading="state.loading">
                    <listPage
                        v-for="item in state.list"
                        :key="item.id"
                        :type="state.index"
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
            <el-empty v-else description="暂无数据" />
        </div>
    </div>
</template>

<script setup lang="ts" name="policyIndex">
import { defineAsyncComponent, reactive, onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { resourceData } from '/@/mock/index'
import { resourceList } from '/@/mock/resource'
import { useRoute } from 'vue-router'
const screenPage = defineAsyncComponent(
    () => import('/@/components/screen/index.vue')
)
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
const TabPage = defineAsyncComponent(
    () => import('/@/components/tab/index.vue')
)
const listPage = defineAsyncComponent(
    () => import('/@/components/hallList/index.vue')
)
const route = useRoute()
const state = reactive({
    loading: false,
    total: resourceList.length,
    listQuery: {
        current: 1,
        size: 10,
        keyword: ''
    } as any,
    screenList: [] as any,
    tabList: [
        {
            name: '数转产品',
            type: 'product'
        },
        {
            name: '数转方案',
            type: 'scheme'
        },
        {
            name: '数转机构',
            type: 'institut'
        }
    ],
    list: [] as any,
    tagList: [] as any,
    index: 0,
    type: 'product'
})
const changePagination = (params: any) => {
    state.listQuery.current = params.page
    state.listQuery.size = params.limit
    if (params.type === 'size') {
        state.listQuery.current = 1
    }
}
const handleTag = (list: any) => {
    state.tagList = list
}
const chooseHandle = (index: number) => {
    state.index = index
    state.type = state.tabList[index].type
    state.list = resourceList[index]
    state.total = resourceList[index].length
    state.screenList= resourceData[index]
}
const handleEnter = (data: string) => {
    if (data !== '') {
        state.list = resourceList[state.index].filter((item: any) => {
            return item.name.includes(data)
        })
    } else {
        state.list = resourceList[state.index]
    }
    state.total = state.list.length
}
onMounted(() => {
    state.index = (Number(route.query.type) as number) || 0
    state.list = resourceList[0]
    state.total = resourceList[0].length
    state.screenList= [...resourceData[0]]
})
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.resource {
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
        z-index: 2;
    }
    .resource-list {
        display: flex;
        flex-flow: wrap;
        padding: 30px 0;
        margin: 0 -10px;
    }
}
</style>
