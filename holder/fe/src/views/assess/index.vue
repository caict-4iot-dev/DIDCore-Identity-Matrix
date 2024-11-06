<template>
    <div class="assess">
        <TitleHeader
            name="评估诊断"
            :bg="getAssetURL('assess/banner.png')"
        ></TitleHeader>
        <div class="assess-box">
            <ul class="wrap assess-list">
                <li class="list-item">
                    <div class="item-box">
                        <h3 class="item-title">中小企业数字化水平线上评估</h3>
                        <p class="item-desc">
                            依据《中小企业数字化水平评测指标(2022年版)》进行，涵盖了数字化基础设施建设、信息技术应用能力、数字化创新能力、数字化战略规划、数字化人才队伍建设等多个方面
                        </p>
                        <flowPage :list="state.xsList" />
                        <a href="/login" rel="noopener noreferrer" class="item-btn">
                            前往评测
                        </a>
                    </div>
                </li>
                <li class="list-item">
                    <div class="item-box">
                    <h3 class="item-title">中小企业数字化水平线下诊断</h3>
                    <p class="item-desc">
                        在线提交线下评估诊断
                        预约申请后，后台管理人会根据贵单位的基本信息给出审批反馈，审批信息会在5个工作日内以短信、站内信等方式通知到您。审批通过后，将会有专业人士提供线下评估诊断服务
                    </p>
                    <flowPage :list="state.xxList" className="flow-xx-box" />
                    <a href="/login" rel="noopener noreferrer" class="item-btn">
                        立即预约
                    </a>
                </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts" name="assessIndex">
import { defineAsyncComponent, reactive } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
const TitleHeader = defineAsyncComponent(
    () => import('/@/components/titleHeader/index.vue')
)
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
.assess-box {
    position: relative;
    padding:30px 0 56px;
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 300px;
        background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
        opacity: 0.8;
        position: absolute;
        left: 0;
        top: 0;
    }
    .assess-list {
        position: relative;
        z-index: 2;
        text-align: center;
        .list-item {
            margin-bottom: 30px;
            padding: 50px 0 30px;
            background: linear-gradient( 180deg, #F1F7FF 0%, #FFFFFF 100%);
            border-radius: 10px;
            border: 1px solid rgba(151,151,151,0.2);
            &:nth-child(2){
                background: linear-gradient( 180deg, #FFF6F5 0%, #FFFFFF 100%);
            }
            .item-box{
                width: 700px;
                margin:0 auto;
            }
            .item-title {
                font-weight: 500;
                font-size: 24px;
                color: #333333;
                line-height: 33px;
            }
            .item-desc {
                font-weight: 400;
                font-size: 14px;
                color: #6d7280;
                line-height: 20px;
                margin: 20px 0 40px;
            }
            .item-btn {
                display: inline-block;
                width: 120px;
                height: 42px;
                background: #0167fe;
                border-radius: 21px;
                font-weight: 400;
                font-size: 18px;
                color: #fff;
                line-height: 42px;
                text-align: center;
                margin-top: 50px;
            }
        }
    }
}
</style>
