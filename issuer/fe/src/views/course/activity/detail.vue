<template>
    <div class="course">
        <div class="wrap">
            <div class="page-nav">
                <router-link to="/course/activity">活动培训</router-link>
                <router-link :to="`/course/activity?type=${state.index}`">
                    活动中心
                </router-link>
                <span>正文</span>
            </div>
            <div class="course-content">
                <div class="course-info">
                    <h3 class="info-title">
                        关于组织申报东莞市中小企业数字化转型咨询诊断项目（第一批）的通知
                    </h3>
                    <p>
                        <span>发布来源：本网</span>
                        <span>发布时间：2024 年 6 月 14 日</span>
                    </p>
                </div>
                <div class="info-box">
                    <p class="info-des">为帮助更多设计原创作者，助力其在平台上更好地进行优秀设计师助推计划 为核心,作品创作和火苗成长，站酷网以针对站内原创作者提供一系列助力成长扶持权益并于2024年4月10日起向所有原创作者开放。</p>
                    <ol class="curse-list">
                        <li>
                            <span>活动时间</span>
                            2024-06-07 10:00- 星期五
                        </li>
                        <li>
                            <span>报名时间</span>
                            2024-06-03 00:00 至 2024-06-07 09:59
                        </li>
                        <li>
                            <span>举办地址</span>
                            广东广州 海珠区南边路38号
                        </li>
                        <li>
                            <span>关联单位</span>
                            主办单位：1918智能网联产业园<br/>
                            承办单位：广州中小企业发展服务中心<br/>
                            支持单位：智造互联网科技有限公司<br/>
                        </li>
                        <li>
                            <span>其他</span>
                            人数：不限
                            费用：免费
                        </li>
                    </ol>
                    <div class="active-img">
                        <img :src="getAssetURL('active-bg.png')" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="expertIndex">
import { reactive, onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
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
.course {
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
    .course-content {
        padding: 50px 100px;
        margin-bottom: 30px;
        background: #fff url('/@/assets/images/bg-3.png') no-repeat bottom
                center;
        background-size: 100% auto;
        box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
        border-radius: 10px;
        .course-info {
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
                font-size: 16px;
                color: #333333;
                line-height: 22px;
                text-align: center;
            }
            .curse-list { 
                padding:30px 0 20px;
                li {
                    font-size: 14px;
                    color: #333333;
                    line-height: 20px;
                    margin-bottom: 30px;
                    text-align: center; 
                    span {
                        display: block;
                        font-weight: 500;
                        font-size: 18px;
                        color: #0167FE;
                        line-height: 25px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
        .active-img{
            width: 1000px;
            height:520px;
            margin:0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
