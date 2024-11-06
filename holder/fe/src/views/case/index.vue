<template>
    <div class="case">
        <TitleHeader
            name="标杆案例"
            :bg="getAssetURL('case-banner.png')"
        ></TitleHeader>

        <div class="wrap">
            <screenPage :list="state.screenList" type="case" @handleEnter="handleEnter"/>
            <div v-if="state.list.length">
                <div class="case-box" v-loading="state.loading">
                <listPage
                    v-for="(item, index) in state.list"
                    :key="index"
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

<script setup lang="ts" name="caseIndex">
import { defineAsyncComponent, reactive } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { caseList } from '/@/mock/index'
import { resourceList } from '/@/mock/resource'
const screenPage = defineAsyncComponent(
    () => import('/@/components/screen/index.vue')
)
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
const listPage = defineAsyncComponent(
    () => import('/@/components/caseList/index.vue')
)

const state = reactive({
    loading: false,
    total: resourceList[3].length,
    listQuery: {
        current: 1,
        size: 10,
        keyword: ''
    },
    screenList: caseList,
    list: resourceList[3]
})
const changePagination = (params: any) => {
    state.listQuery.current = params.page
    state.listQuery.size = params.limit
    if (params.type === 'size') {
        state.listQuery.current = 1
    }
}
const handleEnter = (data:string)=>{
    if(data !==''){
        state.list = resourceList[0].filter((item:any)=>{
            return item.name.includes(data)
        })
    }else{
        state.list = resourceList[0]
    }
    state.total = state.list.length
}
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.case {
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
    .case-box {
        padding: 30px 0;
        margin: 0 -12px;
        display: flex;
        flex-flow: wrap;
        :deep(.list-item) {
            border: 1px solid rgba(152, 163, 183, 0.2);
            box-shadow: none;
        }
    }
}
</style>
