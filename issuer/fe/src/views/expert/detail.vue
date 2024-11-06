<template>
    <div class="expert">
        <div class="wrap">
            <div class="page-nav">
                <router-link to="/expert">专家团队</router-link>
                <span>专家详情</span>
            </div>
            <div class="expert-content">
                <div class="expert-info">
                    <div class="info-img">
                        <img
                            :src="getAssetURL('user.png')"
                            alt=""
                        />
                    </div>
                    <div class="info-box">
                        <h3>刘千里</h3>
                        <div class="info-des">
                            <span>联系方式：</span>
                            <p>18301685653</p>
                        </div>
                        <div class="info-des">
                            <span>个人简介：</span>
                            <p>
                                2018年8月进入中国船舶集团第七二五研究所工作，2020年获得高级工程师职称，洛阳市青年人才，725所青年拔尖人才。主要从事船用钛合金新材料研发、组织性能表征与极端环境评价、钛合金服役性能跨尺度计算、钛合金高效焊接工程化应用及钛合金凝固模拟等方面研究。主持、参与军委科技委、装备发展部、海军装备部、洛阳市重大科技专项及科技部重大专项子课题等渠道科研项目，国拨总经费超1.4亿元。获中国有色金属科学技术进步一等奖1项，发表学术论文17篇，其中SCI论文12篇，受理发明专利6件，授权1项，独立撰写专著1项，发表软著1项。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="expert-list">
                    <ul>
                        <li>
                            <span class="list-label">工作单位名称</span>
                            <div class="list-desc">北京科技大学</div>
                        </li>
                        <li>
                            <span class="list-label">工作单位性质</span>
                            <div class="list-desc">事业单位</div>
                        </li>
                        <li>
                            <span class="list-label">职称/职务</span>
                            <div class="list-desc">高级工程师</div>
                        </li>
                        <li>
                            <span class="list-label">从事专业领域</span>
                            <div class="list-desc">钛合金材料,材料计算</div>
                        </li>
                        <li>
                            <span class="list-label">从事该领域年限</span>
                            <div class="list-desc">20 年</div>
                        </li>
                        <li>
                            <span class="list-label">从事行业类型</span>
                            <div class="list-desc">装备 ,材料</div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span class="list-label">教育背景</span>
                            <div class="list-desc">
                                <p>
                                    2002 年 7 月-2006 年 9 月 北京理工大学
                                    自动化学院 计算机 硕士
                                </p>
                                <p>
                                    2002 年 7 月-2006 年 9 月 北京理工大学
                                    自动化学院 计算机 硕士
                                </p>
                                <p>
                                    2002 年 7 月-2006 年 9 月 北京理工大学
                                    自动化学院 计算机 硕士
                                </p>
                            </div>
                        </li>
                        <li>
                            <span class="list-label">工作经历</span>
                            <div class="list-desc">
                                <p>
                                    2002 年 7 月-2006 年 9 月 北京腾讯科技
                                    Java开发工程师 组长
                                </p>
                                <p>
                                    2002 年 7 月-2006 年 9 月 北京腾讯科技
                                    Java开发工程师 组长
                                </p>
                                <p>
                                    2002 年 7 月-2006 年 9 月 北京腾讯科技
                                    Java开发工程师 组长
                                </p>
                            </div>
                        </li>
                        <li>
                            <span class="list-label">奖顶表彰</span>
                            <div class="list-desc">
                                <p>2002 年 7 月 科技进步奖 省级</p>
                                <p>2002 年 7 月 科技进步奖 省级</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="expertIndex">
// import { defineAsyncComponent,reactive,onMounted } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.expert {
    position: relative;
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 300px;
        background: url('/@/assets/images/detail-bg.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .wrap {
        position: relative;
        z-index: 2;
    }
    .page-nav {
        padding: 30px 0;
        font-size: 14px;
        line-height: 20px;
        text-shadow: 0px 2px 4px #ffffff;
        a {
            color: #333333;
        }
        span {
            color: #0167fe;
            position: relative;
            margin-left: 10px;
            padding-left: 10px;
            &::before {
                content: '/';
                display: block;
                width: 1px;
                height: 16px;
                color: #333;
                position: absolute;
                left: 0;
                top: -1px;
            }
        }
    }
    .expert-content {
        padding-bottom: 100px;
        .expert-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
            padding: 48px 110px 47px 40px;
            background: url('/@/assets/images/bg-4.png') no-repeat;
            background-size: 100% 100%;
            border-radius: 10px;
            .info-img {
                width: 195px;
                height: 195px;
                overflow: hidden;
                border-radius: 50%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .info-box {
                width: calc(100% - 250px);
                padding-top: 5px;
                h3 {
                    font-weight: 500;
                    font-size: 24px;
                    color: #333333;
                    line-height: 33px;
                }
                .info-des {
                    font-size: 16px;
                    color: #6d7280;
                    line-height: 22px;
                    display: flex;
                    margin-top: 20px;
                    span {
                        color: #0167fe;
                        width: 80px;
                    }
                    p {
                        width: calc(100% - 80px);
                    }
                }
            }
        }
        .expert-list {
            overflow: hidden;
            background: #fff url('/@/assets/images/bg-3.png') no-repeat bottom
                center;
            background-size: 100% auto;
            box-shadow: 0px 2px 10px 1px rgba(45, 79, 130, 0.1);
            border-radius: 10px;
            padding: 30px 40px;
            ul{
                &:nth-child(1){
                    display: flex;
                    justify-content: space-between;
                    flex-flow: wrap;
                    li {
                        width: 33.33%;
                    }
                }
            }
            li {
                margin-bottom: 60px;
                .list-label {
                    position: relative;
                    display: block;
                    width: 143px;
                    padding-left: 13px;
                    font-weight: 500;
                    font-size: 14px;
                    color: #333333;
                    line-height: 20px;
                    margin-bottom: 20px;
                    &::before {
                        content: '';
                        display: block;
                        width: 3px;
                        height: 14px;
                        background: #0167fe;
                        border-radius: 2px;
                        @include abs(3px, auto, auto, 0);
                    }
                }
                .list-desc {
                    font-size: 14px;
                    color: #333333;
                    line-height: 20px;
                    padding-left: 13px;
                    p {
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}
</style>
