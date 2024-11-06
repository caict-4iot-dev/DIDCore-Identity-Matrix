<template>
    <div class="tab-box">
        <ol class="wrap tab-item">
            <li
                v-for="(item, index) in getList"
                :key="index"
                @click="chooseHandle(index)"
                :class="{ active: index === getType }"
            >
                {{ item.name }}
            </li>
        </ol>
    </div>
</template>

<script setup lang="ts" name="titleHeader">
import { computed, reactive } from 'vue'
const emit = defineEmits(['chooseHandle'])
// 定义父组件传过来的值
const props = defineProps({
    // 标题名字
    list: {
        type: Array
    },
    type: {
        type: Number
    }
})
const state = reactive({
    activeIndex: 0
})
// 获取
const getList = computed(() => {
    return props?.list
})
const getType = computed(() => {
    return props?.type
})
const chooseHandle = (index: number) => {
    state.activeIndex = index
    emit('chooseHandle', index)
}
</script>
<style scoped lang="scss">
.tab-box {
    border-bottom: 1px solid #dee7f3;
    position: relative;
    z-index: 2;
    .tab-item {
        display: flex;
        justify-content: center;
        padding-top: 8px;
        li {
            position: relative;
            font-weight: 500;
            font-size: 16px;
            color: #383838;
            padding: 22px 46px;
            cursor: pointer;
            &.active,
            &:hover {
                &::before {
                    content: '';
                    display: block;
                    width: calc(100% - 92px);
                    height: 2px;
                    background: #0167fe;
                    position: absolute;
                    bottom: 0;
                    left: 46px;
                }
            }
        }
    }
}
</style>
