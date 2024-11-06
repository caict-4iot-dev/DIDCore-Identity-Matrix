<template>
    <div class="layout-footer">
        <div class="wrap layout-footer-warp"> 
            <router-link to="/home">首页</router-link>
            <router-link to="/policy">政策资讯</router-link>
            <router-link to="/assess">评估诊断</router-link>
            <router-link to="/hall/resource">数转资源</router-link>
            <router-link to="/hall/demand">需求市场</router-link>
            <router-link to="/case">标杆案例</router-link>
            <router-link to="/expert">专家团队</router-link>
            <router-link to="/course/train">课程培训</router-link>
            <router-link to="/course/activity">活动中心</router-link>
            <a href="http://82.157.40.213:8114/" class="manage-link" target="_blank"> 
                管理入口
            </a> 
        </div>
        <div class="layout-footer-copyright">
            <span>Copyright © 2022-2023 北京中小企业数转型科技有限公司</span>
            <a href="" target="_blank" rel="noopener noreferrer">
                苏ICP备2021056661号
            </a>
        </div>
    </div>
</template>

<script setup lang="ts" name="layoutFooter">
// 此处需有内容（注释也得），否则缓存将失败
</script>

<style scoped lang="scss">
.layout-footer {
    width: 100%;
    background: #212d41;
    &-warp {
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 0 50px;
        justify-content: space-between;
        a {
            display: inline-block;
            padding: 30px 0;
            color: #aeb2b8;
            font-size: 16px;
            &:hover {
                color: #0167fe;
                border-color: #0167fe;
            }
        }
        .manage-link{
            height: 30px;
            padding:0 12px;
            line-height: 28px;
            border-radius: 4px;
            border: 1px solid #979797;
        }
    }
    &-copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        color: #aeb2b8;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        border-top: 1px solid #979797;
        span {
            display: block;
            padding-right: 20px;
            margin-right: 20px;
            position: relative;
            &::before {
                content: '';
                display: inline-block;
                width: 1px;
                height: 12px;
                background: #aeb2b8;
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }
        }
        a {
            color: #aeb2b8;
        }
    }
}
</style>
