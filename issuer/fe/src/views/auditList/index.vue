<template>
    <div class="policy">
        <el-table :data="state.tableData" height="550" style="width: 100%">
            <el-table-column label="id" prop="id" width="120" />
            <el-table-column label="申请人" prop="bid" width="220" />
            <el-table-column label="凭证申请类型" prop="type" width="220" />
            <el-table-column label="申请时间" prop="issuanceDate" width="220" />
            <el-table-column label="审核状态" prop="statu" width="220" />
            <el-table-column label="理由" prop="resource" width="120" />
            <el-table-column label="操作" min-width="130">
                <template #default="scope">
                    <el-button v-if="scope.row.status === 0"  type="primary" @click="update(scope.row,'1')">
                        通过
                    </el-button>
                    <el-button  v-if="scope.row.status === 0" type="danger" @click="update(scope.row,'2')">
                        不通过
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script  name="policyIndex" setup>
import { reactive,onMounted } from 'vue'
import { getCertificateRecordApi,updateCertificateRecordApi } from '/@/api/login/login-form'
import {ElMessage} from "element-plus";


const state = reactive({
    statusObj :{
        0: '待审核',
        1: '审核通过',
        2: '审核不通过'
    },
    tableData:[
        {
            id: 1,
            bid: 'did:bid:efnLDXexDs1TsSZdtRmrrKHW3kFvoyFN',
            type: '个人',
            time: '2024-09-02 12:00:00',
            status: '待审核',
            resource: '--',
        }
    ]
})

const getTableData = async ()=>{
    let res = await getCertificateRecordApi({});
    console.log('res: ', res);
    let arr = [];
    res.data.forEach((item)=>{
        // if(item.status !==1){
            item.statu = state.statusObj[item.status];
            item.type = '个人';
            item.issuanceDate = formDate(item.created_time)
            arr.push(item)
        // }
    })
    state.tableData = arr;
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

const update = async ({id,agentid,bid},status)=>{
    let res = await updateCertificateRecordApi({insertId:id,status,agentid,bid});
    console.log('res: ', res);
    getTableData();
}



onMounted(()=>{
    getTableData();
})



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
