<template>
    <div class="list-item">
        <a :href="`/hall/resource/detail?type=${getType}`">
            <div class="item-img">
                <img 
                    v-lazyload="{url: getInfo.coverPictureUrl,error:getAssetURL('defult-1.png')}"
                    alt=""
                />
                <div class="item-rate">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="item-info">
                <h3 class="info-title">
                    {{ getInfo.name }}
                </h3>
                <div class="info-tag">
                    <span>{{ getInfo.industryType }}</span>
                    <!-- <span>医疗</span> -->
                </div>
                <div class="info-company">
                    <img :src="getAssetURL('defult-1.png')" alt="" />
                    <span>{{ getInfo.source }}</span>
                </div>
                <div class="info-meta">
                    <p class="meta-view">
                        <svgIcon
                            class="icon-bg"
                            color="#98A3B7"
                            :size="18"
                            :name="getAssetURL('icon/icon-view.svg')"
                        />
                        {{ getInfo.browseCount }}
                    </p>
                    <p class="meta-time">
                        <svgIcon
                            class="icon-bg"
                            color="#98A3B7"
                            :size="18"
                            :name="getAssetURL('icon/icon-time.svg')"
                        />
                        {{ getInfo.updatedAt }}
                    </p>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts" name="hallList">
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
.list-item {
    width: 285px;
    height: 369px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
    border-radius: 10px;
    margin: 0 10px 20px 10px;
    overflow: hidden;
    .item-img {
        position: relative;
        width: 100%;
        height: 171px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
        .item-rate {
            padding: 6px 13px 6px 16px;
            display: flex;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 0px 10px 10px 0px;
            @include abs(auto, auto, 0, 0);
            span {
                display: inline-block;
                width: 14px;
                height: 14px;
                margin-right: 3px;
                background: url('/@/assets/images/start.png') no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    .item-info {
        padding: 16px;
        .info-title {
            font-weight: 500;
            font-size: 16px;
            color: #333333;
            line-height: 22px;
            height: 44px;
            margin-bottom: 16px;
            @include text-ellipsis(2);
        }
    }
    .info-tag {
        display: flex;
        span {
            max-width: 100px;
            padding: 0 6px;
            font-weight: 400;
            font-size: 14px;
            color: #0167fe;
            line-height: 20px;
            height: 20px;
            margin: 0 8px 8px 0;
            background: rgba(1, 103, 254, 0.15);
            border-radius: 4px;
            @include text-no-wrap();
        }
    }
    .info-company {
        display: flex;
        align-items: center;
        padding: 8px 0 11px;
        border-bottom: 1px dashed rgba(152, 163, 183, 0.5);
        img {
            @include radius(24px);
            margin-right: 8px;
        }
        span {
            font-weight: 400;
            font-size: 14px;
            color: #6d7280;
        }
    }
    .info-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 16px;
        p {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #98a3b7;
            .icon-bg {
                margin-right: 4px;
            }
        }
    }
}
</style>
