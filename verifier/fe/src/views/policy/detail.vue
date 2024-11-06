<template>
    <div class="policy">
        <div class="wrap">
            <div class="page-nav">
                <router-link to="/policy">政策资讯</router-link>
                <router-link :to="`/policy?type=${state.index}`">
                    {{ state.tabList[state.index] }}
                </router-link>
                <span>正文</span>
            </div>
            <div class="policy-content">
                <div class="policy-info">
                    <h3 class="info-title">
                        关于组织申报东莞市中小企业数字化转型咨询诊断项目（第一批）的通知
                    </h3>
                    <p>
                        <span>发布部门：东莞市人力资源和社会保障局</span>
                        <span>发布时间：2024 年 6 月 24 日</span>
                    </p>
                </div>
                <div class="info-box">
                    各镇街（园区）工业和信息化主管部门、各有关企业：
                    <br />
                    为推动我市中小企业数字化转型城市试点建设，挖掘企业数字化改造需求，根据《东莞市中小企业数字化转型城市试点工作方案（2023-2025年）》《东莞市中小企业数字化转型城市试点专项资金管理办法》，现组织申报东莞市中小企业数字化转型咨询诊断项目（第一批），有关事项通知如下：
                    <br />
                    一、申报条件
                    <br />
                    （一）申报单位须为在我市行政区域内注册，具有独立法人资格，且纳入东莞市中小企业数字化转型城市试点数字化牵引单位名单的企业或机构，名单以市工业和信息化局最新公布为准。
                    <br />
                    （二）申报单位开展数字化转型咨询诊断的服务对象须为纳入东莞市中小企业数字化转型城市试点拟改造企业名单的企业，名单以市工业和信息化局最新公布为准。
                    <br />
                    （三）数字化转型咨询诊断项目启动时间须在2024年1月1日之后，且在申报时项目已完工。
                    <br />
                    （四）申报单位和服务企业均不属于市级财政专项资金不予资助范围。
                    <br />
                    二、申报方式及时间
                    （一）申报单位按要求登陆“企莞家-东莞市企业公共服务平台”（http://im.dg.gov.cn）按流程提交申报材料，本批次咨询诊断项目网上提交材料的截至时间为2024年4月1日。
                    <br />
                    （二）通过形式审查后，申报单位按《东莞市中小企业数字化转型咨询诊断项目申报指南》（详见附件）要求准备纸质申报材料，经注册地镇街（园区）工业和信息化主管部门复核盖章后，提交至市工业和信息化局。
                    <br />
                    三、工作要求
                    <br />
                    （一）各镇街（园区）工业和信息化主管部门要高度重视，积极指导各申报单位按指南要求开展项目申报工作，协助做好申报材料审核工作。
                    <br />
                    （二）各申报单位应对照《申报指南》要求，认真准备申报材料。通过形式审查的申报单位须在前置性审查告发出后7天内将纸质材料报送至市工业和信息化局）。
                    <br />
                    四、联系方式
                    <br />
                    业务咨询：杜怡然（22229589）、余翀（23308825）
                    <br />
                    平台技术咨询：王瑞伟（18507697174）
                    <br />
                    联系地址：东莞市南城街道鸿福西路68号塞纳城市嘉园二楼,东莞市工业和信息化局工业互联网科
                    <br />

                    附件：东莞市中小企业数字化转型咨询诊断项目申报指南
                    <br />
                    <div class="info-des">
                        东莞市中小企业数字化转型城市试点工作专班
                        <br />
                        （代章）
                        <br />
                        2024年3月27日
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="expertIndex">
import { reactive, onMounted } from 'vue'
// import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { useRoute } from 'vue-router'
const route = useRoute()
const state = reactive({
    tabList: ['政策信息', '通知公告', '新闻资讯'],
    index: 0
})
onMounted(() => {
    state.index = (Number(route.query.type) as number) || 0
})
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.policy {
    position: relative;
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 300px;
        background: url('/@/assets/images/detail-bg.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .wrap {
        position: relative;
        z-index: 2;
    }
    .page-nav {
        padding: 30px 0;
        font-size: 14px;
        line-height: 20px;
        text-shadow: 0px 2px 4px #ffffff;
        a {
            color: #333333;
            position: relative;
            margin-right: 10px;
            padding-right: 10px;
            &::before {
                content: '/';
                display: block;
                width: 1px;
                height: 16px;
                color: #333;
                position: absolute;
                right: 0;
                top: -1px;
            }
        }
        span {
            color: #0167fe;
        }
    }
    .policy-content {
        padding: 50px 100px;
        margin-bottom: 30px;
        background: #fff url('/@/assets/images/bg-3.png') no-repeat bottom
                center;
        background-size: 100% auto;
        box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
        border-radius: 10px;
        .policy-info {
            border-bottom: 1px solid rgba(152, 163, 183, 0.2);
            text-align: center;
            .info-title {
                font-weight: 500;
                font-size: 24px;
                color: #333333;
                line-height: 33px;
            }
            p {
                display: flex;
                justify-content: center;
                margin: 24px 0 30px;
                span {
                    font-size: 16px;
                    color: #6d7280;
                    line-height: 22px;
                    margin: 0 24px;
                }
            }
        }
        .info-box {
            padding-top: 30px;
            font-size: 16px;
            color: #333333;
            line-height: 22px;
            .info-des {
                margin-top: 30px;
                text-align: right;
            }
        }
    }
}
</style>
