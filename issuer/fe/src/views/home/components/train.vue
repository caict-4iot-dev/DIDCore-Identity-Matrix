<template>
    <div>
        <div class="part7-box">
            <listPage v-for="item in state.list" :key="item.id" :info="item" />
        </div>
        <div class="more-view">
            <router-link to="/course/train">
                查看更多
                <svgIcon
                    :name="getAssetURL('icon/arrow-right.svg')"
                    :size="16"
                    color="#0167FE"
                    class="icon-arrow-right"
                />
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts" name="assess">
import { defineAsyncComponent, reactive } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { trainList } from '/@/mock/train'
const listPage = defineAsyncComponent(
    () => import('/@/components/trainList/index.vue')
)
const state = reactive({
    listQuery: {
        current: 1,
        size: 4
    },
    list: trainList.slice(0, 4) as any
})
</script>
<style scoped lang="scss">
.part7-box {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
}
</style>
