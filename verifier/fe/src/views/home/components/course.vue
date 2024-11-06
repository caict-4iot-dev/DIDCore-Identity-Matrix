<template>
    <div class="index-part7">
        <div class="wrap">
            <titlePage
                name="活动培训"
                :list="state.list"
                @chooseTab="chooseHandle"
            />
            <div style="min-height: 458px;">
                <div class="part7-box" v-if="state.index === 0">
                    <trainPage />
                </div>
                <div v-if="state.index === 1">
                    <activityPage />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="assess">
import { defineAsyncComponent, reactive } from 'vue'
const titlePage = defineAsyncComponent(() => import('./title.vue'))
const trainPage = defineAsyncComponent(() => import('./train.vue'))
const activityPage = defineAsyncComponent(() => import('./activity.vue'))
const state = reactive({
    list: ['课程培训', '活动中心'] as any,
    index: 0
})
const chooseHandle = (index: number) => {
    state.index = index
}
</script>
<style scoped lang="scss">
.index-part7 {
    padding-bottom: 60px;
    :deep(.more-view) {
        margin-top: 10px;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 400;
            font-size: 16px;
            color: #0167fe;
            line-height: 22px;
            .icon-arrow-right {
                margin-left: 4px;
            }
        }
    }
}
</style>
