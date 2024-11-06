<template>
    <div class="title-header">
        <h2>{{ getName }}</h2>
        <ul class="title-list" v-if="getList?.length">
            <li
                v-for="(item, index) in getList"
                :key="index"
                @click="chooseHandle(index)"
                :class="{ active: state.active === index }"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="titleHeader">
import { computed, reactive } from 'vue'
// 定义子组件向父组件传值/事件
const emit = defineEmits(['chooseTab'])
// 定义父组件传过来的值
const props = defineProps({
    // 标题名字
    name: {
        type: String
    },
    list: {
        type: Array
    }
})
const state = reactive({
    active: 0
})
// 获取 icon 图标名称
const getName = computed(() => {
    return props?.name
})
const getList = computed(() => {
    return props?.list
})
const chooseHandle = (index: number) => {
    state.active = index
    emit('chooseTab', index)
}
</script>
<style scoped lang="scss">
.title-header {
    padding: 60px 0 40px;
    h2 {
        font-weight: 500;
        font-size: 30px;
        color: #333;
        line-height: 42px;
        text-align: center;
    }
}
.title-list {
    display: flex;
    justify-content: center;
    margin: 20px 0 -10px;
    li {
        padding: 0 20px 10px;
        font-size: 18px;
        color: #333333;
        line-height: 25px;
        position: relative;
        cursor: pointer;
        &:hover,
        &.active {
            font-weight: 600;
            color: #0167fe;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 30px;
                height: 2px;
                background: #0167fe;
            }
        }
    }
}
</style>
