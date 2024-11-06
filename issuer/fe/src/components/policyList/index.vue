<template>
    <li class="policy-item">
        <a :href="`/policy/detail?type=${getType}`">
            <div class="item-img">
                <img v-lazyload="{url: getInfo.pic,error:getAssetURL('defult-3.png')}" alt="" />
            </div>

            <div class="item-info">
                <h3 class="info-title">
                    {{ getInfo.title }}
                </h3>
                <p class="info-desc">
                    {{ getInfo.title }}
                </p>
                <div class="info-meta">
                    <span>发布部门: 科创园</span>
                    <span>发布时间: {{ getInfo.time }}</span>
                </div>
            </div>
        </a>
    </li>
</template>

<script setup lang="ts" name="caseList">
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { computed } from 'vue'
// 定义父组件传过来的值
const props = defineProps({
    info: {
        type: Object
    },
    type: {
        type: Number
    }
})
// 获取
const getInfo = computed(() => {
    return props?.info as any
})
const getType = computed(() => {
    return props?.type as any
})
</script>
<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.policy-item {
    padding: 30px 0 28px;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    a {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .item-img {
        width: 170px;
        height: 125px;
        border-radius: 8px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .item-info {
        width: calc(100% - 210px);
        padding-top: 6px;
        .info-title {
            font-weight: 500;
            font-size: 16px;
            color: #333333;
            line-height: 22px;
        }
        .info-desc {
            font-weight: 400;
            font-size: 14px;
            color: #6d7280;
            line-height: 20px;
            padding: 14px 0 20px;
            height: 74px;
            @include text-ellipsis(2);
        }
        .info-meta {
            span {
                font-weight: 400;
                font-size: 12px;
                color: #6d7280;
                line-height: 17px;
                &:nth-child(1) {
                    margin-right: 162px;
                }
            }
        }
    }
}
</style>
