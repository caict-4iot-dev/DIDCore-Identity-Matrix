<template>
    <div class="policy">
        <el-table :data="state.tableData" height="550" style="width: 100%">
            <el-table-column label="id" prop="id" width="220" />
            <el-table-column label="申请人" prop="holderBid" width="350" />
            <el-table-column label="核验状态" prop="statu" width="220" />
            <el-table-column label="申请时间" prop="created_time" width="220" />
            <!-- <el-table-column label="理由" prop="resource" width="120" /> -->
            <el-table-column label="操作" min-width="130">
                <template #default="scope">
                    <el-button v-if="scope.row.status === 0"  type="primary" @click="verCrenditial(scope.row)">
                        立即核验
                    </el-button>
                    <!-- <el-button  type="danger" @click="openVerDialog(scope.row)">
                        不通过
                    </el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script name="policyIndex" setup>
import { onMounted, reactive } from 'vue'
import { verupdatecredentialList,vergetcredentialList } from '/@/api/login/login-form'
import {ElMessage} from "element-plus";

const state = reactive({
    tableData:[
        {
            id: 1,
            bid: 'did:bid:efnLDXexDs1TsSZdtRmrrKHW3kFvoyFN',
            type: '个人',
            time: '2024-09-01 12:00:00',
            status: '待审核',
            resource: '申请单1',
        }
    ]
})
onMounted(()=>{
    getTable();
})
const getTable = async ()=>{
    const res = await vergetcredentialList({})
    res.data.forEach((item) => {
        item.created_time = formDate(item.created_time)
        item.statu = item.status === 0 ? '待核验' : '已核验'
    })
    state.tableData = res.data
}
const formDate = (propsDate) => {
    const date = new Date(propsDate)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
    return new Intl.DateTimeFormat('zh-CN', options).format(date)
}
const verCrenditial = async (row) => {
    const params = {
      id: row.id,
      holderBid: row.holderBid,
      vc: row.vc,
      status: 1,
      agentid:row.agentid
    };
    const res = await verupdatecredentialList(params);
      ElMessage({
        message: '核验成功',
        type: 'success',
    })
    getTable();
}


</script>

<style lang="scss" scoped>
@import '/@/assets/scss/mixins/index.scss';


//.dialog-contain {
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//}


.policy {
    margin: 20px;
    position: relative;



    .affix--fixed {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 200px;
        height: 200px;
        border-radius: 200px;
        font-size: 30px;
    }

    .wrap {
        position: relative;
        z-index: 1;
    }

    .policy-list {
        padding: 20px 0 53px;

        li {
            padding: 30px 0 28px;
            border-bottom: 1px solid rgba(151, 151, 151, 0.2);

            a {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

            .item-img {
                width: 170px;
                height: 125px;
                border-radius: 8px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .item-info {
                width: calc(100% - 210px);
                padding-top: 6px;

                .info-title {
                    font-weight: 500;
                    font-size: 16px;
                    color: #333333;
                    line-height: 22px;
                }

                .info-desc {
                    font-weight: 400;
                    font-size: 14px;
                    color: #6D7280;
                    line-height: 20px;
                    padding: 14px 0 20px;
                    height: 74px;
                    @include text-ellipsis(2);
                }

                .info-meta {
                    span {
                        font-weight: 400;
                        font-size: 12px;
                        color: #6D7280;
                        line-height: 17px;

                        &:nth-child(1) {
                            margin-right: 162px;
                        }
                    }
                }
            }
        }
    }
}
</style>
