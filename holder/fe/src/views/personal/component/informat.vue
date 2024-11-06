<template>
    <div class="informat"> 
        <Title title="基本信息"/>
        <div class="informat-main">
            <div class="informat-user">
                <div class="user-info">
                    <div class="info-img">
                        <img :src="getAssetURL('user.png')" alt="" />
                    </div>
                    <h3>bMJWvEsqFRkQKig</h3>
                    <span>未认证</span>
                </div>
                <div class="user-btn">
                    <el-button type="primary">
                        <svgIcon
                            :size="16"
                            style="margin-right: 7px"
                            :name="getAssetURL('icon/icon-edit.svg')"
                        ></svgIcon>
                        编辑资料
                    </el-button>
                </div>
            </div>
            <ul class="info-list">
                <li>
                    <span>账号信息</span>
                    <p>138****000</p>
                </li>
                <li>
                    <span>手机号</span>
                    <p>未绑定</p>
                </li>
                <li>
                    <span>电子邮箱</span>
                    <p>未绑定</p>
                </li>
                <li>
                    <span>注册时间</span>
                    <p>2024-05-04</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts" name="personalIndex">
import { defineAsyncComponent} from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
const Title = defineAsyncComponent(() => import('./title.vue'))
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.informat {
    width: 100%;
    background: #FFFFFF;
    %label {
        display: block;
        font-weight: 500;
        font-size: 18px;
        color: #333333;
        line-height: 25px;
        position: relative;
        padding-left: 13px;
        &:before {
            content: '';
            display: block;
            width: 3px;
            height: 14px;
            background: #0167fe;
            border-radius: 2px;
            @include abs(50%, auto, auto, 0);
            transform: translateY(-50%);
        }
    } 
    &-main {
        width: 100%;
        padding: 30px;
        .informat-user {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .user-info {
            display: flex;
            align-items: center;
            .info-img {
                @include radius(60px);
                overflow: hidden;
                img {
                    @include radius(60px);
                }
            }
            h3 {
                font-weight: 600;
                font-size: 18px;
                color: #333333;
                line-height: 25px;
                max-width: 200px;
                margin: 0 20px;
                @include text-no-wrap();
            }
            span {
                display: flex;
                align-items: center;
                padding: 0 10px;
                height: 24px;
                font-size: 16px;
                color: #ffffff;
                background: rgba(152, 163, 183, 0.7);
                border-radius: 2px;
                &.active {
                    color: #0167fe;
                    background: rgba(1, 103, 254, 0.15);
                }
            }
        }
        .user-btn {
            .el-button {
                width: 144px;
                height: 48px;
                border-radius: 24px;
                background: #0167fe;
            }
        }
        .info-list {
            padding-top: 65px;
            display: flex;
            justify-content: space-between;
            li {
                width: 25%;
                span {
                    @extend %label;
                }
                p {
                    margin-top: 20px;
                    padding-left: 13px;
                    font-size: 14px;
                    color: #333333;
                    line-height: 20px;
                }
            }
        }
    }
}
</style>
