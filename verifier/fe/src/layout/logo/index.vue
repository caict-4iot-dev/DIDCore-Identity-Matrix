<template>
    <div class="layout-logo" @click="goPage">
        <img :src="logoMini" alt="" class="layout-logo-medium-img" />
        <span>试点城市中小企业数字化转型公共服务平台</span>
    </div>
</template>

<script setup lang="ts" name="layoutLogo">
import logoMini from '/@/assets/images/logo.png'
import { useRouter } from 'vue-router'
// 定义变量内容
const router = useRouter()
// logo 点击回到首页
const goPage = () => {
    router.push('/')
}
</script>

<style scoped lang="scss">
.layout-logo { 
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
    color: #181818;
    cursor: pointer;
    animation: logoAnimation 0.3s ease-in-out;
    span {
        white-space: nowrap;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
    } 
    &-medium-img {
        width: 24px;
        margin-right: 12px;
    }
}
</style>
