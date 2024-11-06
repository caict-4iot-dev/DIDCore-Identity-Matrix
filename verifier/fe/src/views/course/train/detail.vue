<template>
    <div class="course">
        <div class="wrap">
            <div class="page-nav">
                <router-link to="/course/train">活动培训</router-link>
                <router-link to="/course/train">课程培训</router-link>
                <span>正文</span>
            </div>
            <div class="course-content">
                <div class="course-info">
                    <h3 class="info-title">
                        关于组织申报东莞市中小企业数字化转型咨询诊断项目（第一批）的通知
                    </h3>
                    <p>
                        <span>发布部门：东莞市人力资源和社会保障局</span>
                        <span>发布时间：2024 年 6 月 24 日</span>
                    </p>
                </div>
                <div class="info-box">
                    <img :src="getAssetURL('train-bg.png')" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="expertIndex">
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
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
            padding: 40px 0 50px;
            font-size: 16px;
            color: #333333;
            line-height: 22px; 
            img{
                display: block;
                width:861px;
                height:482px;
                margin:0 auto;
            }
        }
    }
}
</style>
