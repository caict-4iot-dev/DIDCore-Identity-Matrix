<template>
    <div class="personal"> 
        <div class="personal-main">
            <ul class="personal-nav">
                <li v-for="(item,index) in state.navList" :key="index" @click="choseHandle(index)" :class="{active:index===state.activeIndex}">
                    <svgIcon :size="24" style="margin-right: 4px;" :name="getAssetURL(`icon/${item.icon}`)"></svgIcon>{{ item.name }}
                </li>
            </ul>
            <div class="main-body">
                <template v-if="state.activeIndex===0">
                    <Informat/>
                </template> 
                <template v-if="state.activeIndex===1">
                    <Enterprise/>
                </template>  
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="personalIndex">
import {reactive,defineAsyncComponent} from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
const Informat = defineAsyncComponent(() => import('./component/informat.vue'))
const Enterprise = defineAsyncComponent(() => import('./component/enterprise.vue'))
const state = reactive({
    navList: [
    {
            name: '基本信息',
            icon: 'icon-staic.svg'
        },
        {
            name: '企业认证',
            icon: 'icon-set.svg'
        },
        {
            name: '诊断评估',
            icon: 'icon-staic.svg'
        },
        {
            name: '项目管理',
            icon: 'icon-set.svg'
        },
        {
            name: '需求管理',
            icon: 'icon-set.svg'
        },
        {
            name: '标杆案例',
            icon: 'icon-staic.svg'
        },
        {
            name: '问卷调研',
            icon: 'icon-set.svg'
        },
        {
            name: '评价中心',
            icon: 'icon-staic.svg'
        }
    ],
    activeIndex: 0
})
const choseHandle = (index:number) => {
    if(index>1){
        return
    }
    state.activeIndex = index
}
</script>

<style scoped lang="scss">
.personal {
    height: 100%;
    overflow: hidden;
    background: #F0F5FA; 
    &-main{
        display: flex; 
        .personal-nav{
            width: 260px;
            height: calc(100vh - 48px);
            overflow-y: auto;
            background: #FFFFFF;
            box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.1);
            li{
                height: 56px;
                display: flex;
                width: 100%;
                align-items: center;
                cursor: pointer;
                font-size: 16px;
                color: #333333;
                border-right: 4px solid #fff;
                padding-left: 24px;
                &.active{
                    background: linear-gradient( 90deg, rgba(1,103,254,0.1) 0%, rgba(1,103,254,0.05) 100%);
                    border-right: 4px solid #0167FE;
                    color: #0167FE;
                    font-weight: 500;
                }
                &:hover{
                    cursor: no-drop;
                }
                &:nth-child(2),
                &:nth-child(1){
                    &:hover{
                        background: linear-gradient( 90deg, rgba(1,103,254,0.1) 0%, rgba(1,103,254,0.05) 100%);
                        border-right: 4px solid #0167FE;
                        color: #0167FE;
                        font-weight: 500; 
                        cursor: pointer;
                    }
                }
            }
        }
        .main-body{
            width: calc(100% - 300px);
            height: calc(100vh - 88px);
            overflow-y: auto;
            margin:20px 0  0 20px;
            box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.1);
        }
    }
}
</style>
