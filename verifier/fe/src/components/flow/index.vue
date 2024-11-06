<template>
    <ul class="flow-box" :class="getClassName">
        <li v-for="(item, index) in getList" :key="index" class="flow-item">
            <span>{{ item }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts" name="titleHeader">
import { computed } from 'vue'

// 定义父组件传过来的值
const props = defineProps({
    // 标题名字
    list: {
        type: Array
    },
    className:{
      type:String
    }
})
 
const getList = computed(() => {
    return props?.list
})
const getClassName = computed(() => {
    return props?.className
})
</script>
<style scoped lang="scss">
ul.flow-box {
    display: flex; 
    justify-content: space-between;
    li {
        position: relative;
        padding-top: 88px;
        text-align: center;
        @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
                background: url('../../assets/images/assess/flow-xs-#{$i}.png')
                    no-repeat
                    center
                    top;
                background-size: 64px 64px;
            }
        }
        &::before {
            content: '';
            position: absolute;
            right: -56px;
            top: 12px;
            width: 40px;
            height: 40px;
            background: url('../../assets/images/assess/flow-item.png') no-repeat;
            background-size: 100% 100%;
        }
        &:nth-child(3) {
            &::before {
                right: -44px;
            }
        }
        &:last-child {
            &::before {
                display: none;
            }
        }
        span {
            font-weight: 400;
            font-size: 16px;
            color: #333;
            line-height: 22px;
        }
    }
    &.flow-xx-box {
        li {
            @for $i from 1 through 5 {
                &:nth-child(#{$i}) {
                    background: url('../../assets/images/assess/flow-xx-#{$i}.png')
                        no-repeat
                        center
                        top;
                    background-size: 64px 64px;
                }
            }
            &::before {
                right: -46px !important;
            }
            &:nth-child(4) {
                &::before {
                    right: -50px !important;
                }
            }
        }
    }
}
</style>
