<template>
    <div class="case-list">
        <a href="/case/detail">
            <div class="item-box">
                <div class="item-img">
                    <img v-lazyload="{url: getInfo.coverPictureUrl,error:getAssetURL('defult-3.png')}" alt="" />
                </div>
                <div class="item-info">
                    <h3 class="info-title">
                        {{ getInfo.name }}
                    </h3>
                    <p class="info-desc">
                        {{ getInfo.introduction }}
                    </p>
                    <div class="info-tag">
                        <span>{{ getInfo.industryType }}</span>
                    </div>
                    <div class="info-rate">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="info-meta">
                        <p class="meta-time">
                            <svgIcon
                                class="icon-bg"
                                color="#98A3B7"
                                :size="15"
                                :name="getAssetURL('icon/icon-time.svg')"
                            />
                            {{ getInfo.updatedAt }}
                        </p>
                        <p class="meta-view">
                            <svgIcon
                                class="icon-bg"
                                color="#98A3B7"
                                :size="15"
                                :name="getAssetURL('icon/icon-view.svg')"
                            />
                            {{ getInfo.browseCount }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="item-company">
                开发商：
                <span>{{ getInfo.source }}</span>
            </div>
        </a>
    </div>
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
.case-list {
    width: 384px;
    height: 236px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
    border-radius: 10px;
    margin: 0 12px 24px;
    .item-box {
        display: flex;
        justify-content: space-between;
        .item-img {
            display: block;
            width: 120px;
            height: 160px;
            border-radius: 10px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
            img[lazy=loading],
            img[lazy=error]{
                background: red;
            }
        }
        .item-info {
            width: calc(100% - 133px);
            .info-title {
                font-weight: 500;
                font-size: 16px;
                color: #333333;
                line-height: 22px;
                height: 22px;
                @include text-no-wrap();
            }
            .info-desc {
                font-weight: 400;
                font-size: 14px;
                color: #6d7280;
                line-height: 20px;
                height: 40px;
                margin: 11px 0;
                @include text-ellipsis(2);
            }
            .info-tag {
                display: flex;
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
            .info-rate {
                padding: 3px 0 15px;
                display: flex;
                span {
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    margin-right: 3px;
                    background: url('/@/assets/images/start.png') no-repeat;
                    background-size: 100% 100%;
                }
            }
            .info-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
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
    }
    .item-company {
        padding-top: 16px;
        font-weight: 400;
        font-size: 14px;
        color: #333333;
        line-height: 20px;
        @include text-no-wrap();
        span {
            color: #0167fe;
        }
    }
}
</style>
