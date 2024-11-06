<template>
    <div class="list-item">
        <a href="/expert/detail">
            <img
                class="item-img" 
                v-lazyload="{url: getAssetURL('user.png'),error:getAssetURL('user.png')}"
                alt=""
            />
            <div class="item-info">
                <h3 class="info-title">{{ getInfo.realName }}</h3>
                <p class="info-desc">{{ getInfo.fieldNames }}</p>
                <div class="info-tag">
                    <span>{{ getInfo.titleName }}</span>
                </div>
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
    }
})
// 获取
const getInfo = computed(() => {
    return props?.info as any
})
</script>
<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.list-item {
    width: 285px;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
    border-radius: 10px;
    margin: 0 10px 30px;
    text-align: center;
    .item-img {
        @include radius(131px);
    }
    .item-info {
        padding-top: 8px;
        .info-title {
            font-weight: 500;
            font-size: 16px;
            color: #333333;
            line-height: 22px;
            margin: 12px 0;
            @include text-no-wrap();
        }
        .info-desc {
            font-weight: 400;
            font-size: 14px;
            color: #6d7280;
            line-height: 20px;
            padding-bottom: 12px;
            @include text-no-wrap();
        }
        .info-tag {
            display: flex;
            justify-content: center;
            span {
                padding: 0 6px;
                font-weight: 400;
                font-size: 14px;
                color: #0167fe;
                line-height: 20px;
                height: 20px;
                margin: 0 8px 8px 0;
                background: rgba(1, 103, 254, 0.15);
                border-radius: 4px;
            }
        }
    }
}
</style>
