<template>
    <div class="wrap index-part1">
            <swiperPage
                swiperClass="swiper-part1"
                :swiperList="state.swiperList"
            >
                <template #item="item">
                    <template v-if="item.swiperItem.length > 0">
                        <div
                        class="part1-item"
                        v-for="(v, i) in item.swiperItem"
                        :key="i"
                    >
                        <div class="item-data">
                            <span>{{ v.num }}</span>
                            <em>{{ v.name }}</em>
                        </div>
                        <div class="item-icon"></div>
                    </div>
                    </template>
                    <template v-else>
                        <ul class="flow-box">
                            <li>
                                <h3>注册/登录</h3>
                                <p>平台内注册/登录，填写企业<br/>基本信息</p>
                            </li>
                            <li>
                                <h3>企业申报/认证</h3>
                                <p>平台内填写企业档案信息，进<br/>行试点企业申报/认证</p>
                            </li>
                            <li>
                                <h3>数字化水平评测</h3>
                                <p>平台内进行数字化水平自评估<br/>并预约线下诊断</p>
                            </li>
                            <li>
                                <h3>数字化改造</h3>
                                <p>平台内进行数字化改造备案，<br/>并选择数字化服务商进行诊断</p>
                            </li>
                            <li>
                                <h3>项目验收</h3>
                                <p>平台内进行项目验收评估并申<br/>报验收</p>
                            </li>
                            <li>
                                <h3>奖补资金申请</h3>
                                <p>平台内申报项目奖补资金</p>
                            </li>
                        </ul>
                    </template>
                </template>
            </swiperPage>
        </div>
</template>

<script setup lang="ts" name="assess">
import { defineAsyncComponent,reactive } from 'vue'
const swiperPage = defineAsyncComponent(
    () => import('/@/components/swiper/index.vue')
)
const state = reactive({
    swiperList: [
        [
            {
                num: 278,
                name: '中小企业'
            },
            {
                num: 28,
                name: '服务商'
            },
            {
                num: 108,
                name: '改造项目'
            },
            {
                num: 178,
                name: '数转产品'
            },
            {
                num: 132,
                name: '数转方案'
            },
            {
                num: 98,
                name: '数转案例'
            }
        ],
        []
    ] as any
})

</script>
<style scoped lang="scss">
.index-part1 {
    margin-top: -51px;
    .swiper-part1{
        height: 128px;
    }
    .part1-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 180px;
        height: 102px;
        padding: 20px;
        background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
        box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
        border-radius: 10px;
        .item-data {
            span {
                display: block;
                font-weight: bold;
                font-size: 24px;
                color: #333333;
                line-height: 32px;
            }
            em {
                margin-top: 8px;
                display: block;
                font-weight: 400;
                font-size: 14px;
                color: #333333;
                line-height: 22px;
            }
        }
        .item-icon {
            position: relative;
            width: 56px;
            height: 56px;
            &::before {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                background: #cae2ff;
                border-radius: 28px;
                filter: blur(10px);
                position: absolute;
                top: 0;
                left: 0;
            }
            &:after {
                content: '';
                display: block;
                width: 50px;
                height: 50px;
                position: absolute;
                top: 3px;
                left: 3px;
                z-index: 2;
                background: url('../../../assets/images/data-1.png') no-repeat;
                background-size: 100% 100%;
            }
        }
        @for $i from 1 to 6 {
            &:nth-child(#{$i}) {
                .item-icon:after {
                    background-image: url('../../../assets/images/data-#{$i}.png');
                }
            }
        }
    }
    :deep(.swiper-pagination) {
        .swiper-pagination-bullet {
            width: 30px;
            height: 2px;
            background: #0167fe;
            border-radius: 1px;
        }
    }
    .flow-box{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding:20px 0 20px 24px;
        background: linear-gradient( 180deg, #F1F7FF 0%, #FFFFFF 100%);
        box-shadow: 0px 2px 10px 1px rgba(45,79,130,0.1);
        border-radius: 10px;
        height: 102px;

        li{
            width: 204px;
            h3{
                font-weight: 500;
                font-size: 16px;
                color: #0167FE;
                line-height: 22px; 
                width: 150px;
                background: url('../../../assets/images/icon-jt.png') no-repeat center right;
                background-size: 43px 8px;
            }
            p{
                font-weight: 400;
                font-size: 12px;
                color: #6D7280;
                line-height: 16px;
                margin-top: 8px;
            }
            &:nth-child(2),
            &:nth-child(3){
                h3{
                    width: 175px;
                }
            }
            &:nth-child(4){
                h3{
                    width: 160px;
                }
            }
            &:nth-child(5){
                h3{
                    width: 155px;
                }
            }
            &:last-child{
                width: 155px;
                h3{
                    background: none;
                    width: auto;
                }
            }
        }
    }
}
</style>
