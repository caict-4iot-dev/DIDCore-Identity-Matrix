<template>
    <div class="demand">
        <TitleHeader
            name="需求市场"
            :bg="getAssetURL('demand-banner.png')"
        ></TitleHeader>
        <div class="wrap" v-loading="state.loading">
            <screenPage :list="state.screenList" @handleEnter="handleEnter"/>
            <el-table
                class="demand-table"
                :data="state.tableData"
                style="width: 100%"
            >
                <el-table-column type="index" width="80px" label="需求编号" />
                <el-table-column prop="title" label="需求名称">
                    <template #default="{ row }">
                        <span class="table-des">{{ row.title }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="des" label="需求说明">
                    <template #default="{ row }">
                        <span class="table-des">{{ row.des }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="type" label="需求类型" />
                <el-table-column label="操作" width="80px">
                    <template #default="{ row }">
                        <el-button
                            link
                            type="primary"
                            :typeName="row.type"
                            @click="goPage"
                        >
                            查看
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
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
import { defineAsyncComponent, reactive } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { demandList } from '/@/mock/index'
import { demandData } from '/@/mock/demand'
import { useRouter } from 'vue-router'
const screenPage = defineAsyncComponent(
    () => import('/@/components/screen/index.vue')
)
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
const router = useRouter()
const state = reactive({
    loading: false,
    total: demandData.length,
    listQuery: {
        current: 1,
        size: 10,
        keyword: ''
    },
    screenList: demandList,
    tableData: demandData
})
const changePagination = (params: any) => {
    state.listQuery.current = params.page
    state.listQuery.size = params.limit
    if (params.type === 'size') {
        state.listQuery.current = 1
    }
}
const goPage = () => {
    router.push('/hall/demand/detail')
}
const handleEnter = (data:string)=>{
    if(data !==''){
        state.tableData = demandData.filter((item:any)=>{
            return item.title.includes(data)
        })
    }else{
        state.tableData = demandData
    }
    state.total = state.tableData.length
}
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.demand {
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
    .demand-table {
        margin: 30px 0;
        .table-des {
            @include text-no-wrap();
        }
        :deep(.el-table__header) {
            height: 48px;
            border-top: 1px solid #dee7f3;
            th {
                background: rgba(237, 245, 255, 0.5);
                border: 0;
                font-weight: 600;
                font-size: 14px;
                color: #333333;
            }
        }
        :deep(.el-table__body) {
            td {
                color: #333;
                font-size: 14px;
                border-bottom: 1px dashed #dee7f3;
            }
        }
    }
}
</style>
