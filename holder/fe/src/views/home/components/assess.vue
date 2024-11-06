<template>
    <div class="index-part3">
        <div class="wrap">
            <titlePage name="评估诊断" />
            <div>
                <div class="part3-list">
                    <div class="part3-flow">
                        <h4>线上评估流程</h4>
                        <flowPage
                            style="padding: 0 40px 0 52px"
                            :list="state.xsList"
                        />
                    </div>
                    <div class="part3-link">
                        <h4>中小企业数字化水平评估</h4>
                        <p>线上评估</p>
                        <a href="/login" rel="noopener noreferrer">前往评估</a>
                    </div>
                </div>
                <div class="part3-list">
                    <div class="part3-flow">
                        <h4>线下诊断流程</h4>
                        <flowPage
                            style="padding: 0 40px 0 52px"
                            :list="state.xxList"
                            className="flow-xx-box"
                        />
                    </div>
                    <div class="part3-link">
                        <h4>中小企业数字化水平诊断</h4>
                        <p>线下诊断</p>
                        <a href="/login" rel="noopener noreferrer">申请诊断</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="assess">
import { defineAsyncComponent, reactive } from 'vue'
const titlePage = defineAsyncComponent(() => import('./title.vue'))
const flowPage = defineAsyncComponent(
    () => import('/@/components/flow/index.vue')
)
const state = reactive({
    xsList: [
        '注册/登录',
        '企业申报认证',
        '选择自评估类型',
        '在线自评估',
        '查看评估报告'
    ],
    xxList: [
        '填写诊断申请',
        '确定诊断方案',
        '组织线下诊断',
        '形成诊断意见',
        '查看诊断报告'
    ]
})
</script>
<style scoped lang="scss">
.index-part3 {
    background: #fff;
    padding-bottom: 40px;
    .part3-list {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .part3-flow {
            width: 800px;
            padding: 30px 0;
            background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
            box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
            border-radius: 10px;
            h4 {
                font-weight: 600;
                font-size: 20px;
                color: #333;
                line-height: 28px;
                text-align: center;
                margin-bottom: 30px;
            }
        }
        .part3-link {
            width: 380px;
            text-align: center;
            padding: 45px 0 40px;
            background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
            box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
            border-radius: 10px;
            h4 {
                font-weight: 600;
                font-size: 20px;
                color: #333333;
                line-height: 28px;
            }
            p {
                font-weight: 400;
                font-size: 18px;
                color: #6d7280;
                line-height: 25px;
                margin: 20px 0 30px;
            }
            a {
                display: inline-block;
                width: 120px;
                height: 42px;
                background: #0167fe;
                border-radius: 21px;
                font-weight: 400;
                font-size: 18px;
                color: #ffffff;
                line-height: 42px;
                text-align: center;
            }
        }
        &:nth-child(2) {
            .part3-flow {
                background: linear-gradient(180deg, #fff6f5 0%, #ffffff 100%);
                box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
            }
            .part3-link {
                background: linear-gradient(180deg, #fff6f5 0%, #ffffff 100%);
                box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
            }
        }
    }
}
</style>
