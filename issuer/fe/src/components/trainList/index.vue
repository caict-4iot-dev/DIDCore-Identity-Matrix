<template>
    <div class="train-item">
        <a href="/course/train/detail">
            <img
                v-lazyload="{url: getInfo.cover,error:getAssetURL('defult-3.png')}"
                class="item-img"
                alt="课程培训"
            />
            <div class="item-info">
                <h3 class="info-title">{{ getInfo.title }}</h3>
                <p class="info-desc">
                    {{ getInfo.industry_name }}
                </p>
                <span>发布时间：{{ getInfo.createTime || '-' }}</span>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts" name="titleHeader">
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { computed } from 'vue'
// 定义父组件传过来的值
const props = defineProps({
    info: {
        type: Object
    },
    type: {
        type: String
    }
})
// 获取
const getInfo = computed(() => {
    return props?.info as any
})
</script>
<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.train-item {
    width: 590px;
    padding: 20px;
    margin: 0 10px 20px;
    background: #ffffff;
    box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
    border-radius: 10px;
    a {
        display: flex;
        justify-content: space-between;
    }
    .item-img {
        width: 200px;
        height: 150px;
        border-radius: 10px;
    }
    .item-info {
        width: calc(100% - 220px);
        padding-top: 10px;
        .info-title {
            font-weight: 500;
            font-size: 16px;
            color: #333333;
            line-height: 22px;
            @include text-no-wrap();
        }
        .info-desc {
            font-weight: 400;
            font-size: 14px;
            color: #6d7280;
            line-height: 20px;
            height: 40px;
            margin: 12px 0 36px;
            @include text-ellipsis(2);
        }
        span {
            font-weight: 400;
            font-size: 14px;
            color: #98a3b7;
            line-height: 20px;
        }
    }
}
</style>
