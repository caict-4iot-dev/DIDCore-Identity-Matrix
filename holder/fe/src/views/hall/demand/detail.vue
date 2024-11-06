<template>
    <div class="demand">
        <div class="wrap">
            <div class="page-nav">
                <router-link to="/hall/resource">供需大厅</router-link>
                <router-link to="/hall/demand">需求列表</router-link>
                <span>需求详情</span>
            </div>
            <div class="demand-content">
                <div class="content-detail">
                    <div class="content-l">
                        <div class="info-header">
                            <div>
                                <h3 class="info-title">
                                    工业废气治理方面的新技术
                                </h3>
                                <div class="info-tag">
                                    <span>生产过程数字化</span>
                                </div>
                            </div>
                            <el-button type="primary">
                                <svgIcon
                                    :name="getAssetURL('icon/icon-message.svg')"
                                    style="margin-right: 3px"
                                ></svgIcon>
                                响应需求
                            </el-button>
                        </div>
                        <div class="info-content">
                            <p>需求类型：新技术研发</p>
                            <p>需求场景：一级场景/二级场景/三级场景</p>
                            <p>发布时间： 2024-10-01 08:59:59</p>
                        </div>
                        <ul class="info-des">
                            <li>
                                <span>需求描述</span>
                                <p>
                                    近年来3D打印技术不断发展，不断为制造业开辟全新的生产模式。3D打印材料作为3D打印技术的基础，已列入新材料十三五规划的重点发展对象。光固化技术及光敏树脂作为3D打印技术中成熟的部分，成型制品具有高的成型精度和速度，已可以在多个领域里得到应用。其在概念设计的交流、单件小批量精密制造、产品模型等诸多方面广泛应用于航空、汽车、电器、艺术品以及医疗等行业。
                                    项目情况：
                                    1、目前3D打印聚酰亚胺墨水已经达到10公斤级出产。
                                </p>
                            </li>
                            <li>
                                <span>场景描述</span>
                                <p>
                                    重庆市如景食品有限公司 保安 薪资面议
                                    1名（男）
                                    要求：年龄40—55周岁之间，限男士，身高175CM以上，身体健康，容貌端正，有保安工作经验优先
                                    工作时间：上一休一
                                    福利：提供工作餐、生日福利、节日福利等
                                    上班地址：永川区植物园红绿灯旁边（如景食品工厂）
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="content-r">
                        <span class="company-label">企业信息</span>
                        <div class="company-info">
                            <div class="company-logo">
                                <img
                                    src="https://www.kczg.org.cn/download/decrypt?key=aHR0cHM6Ly9pbWctei5rY3pnLm9yZy5jbi9mcnVpdC9lbmNyeXB0VXBsb2FkLzIwMjQvMDMvMDUvMTYvYWViMWE1LnBuZw%3D%3D"
                                    alt=""
                                />
                            </div>
                            <dl class="company-des">
                                <dt>重庆市科艺华创业服务股份有限公司</dt>
                                <dd>企业统一代码：32102619***1101</dd>
                                <dd>
                                    企业通讯地址：北京市海淀区上地9街9号数码科技广场
                                </dd>
                                <dd>联系人：张经理</dd>
                                <dd>联系电话：166****6763</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <ul class="content-des">
                    <li>
                        <span class="des-label">拟投资资源</span>
                        <div class="des-list">
                            <p>已投资金：30 万元</p>
                            <p>已采用产品：华为、小米、步步高</p>
                            <p>已采用服务商：华为、小米、步步高</p>
                            <p>已实施周期：200 天</p>
                            <p>预计投入资金：20 万元</p>
                        </div>
                    </li>
                    <li>
                        <span class="des-label">需求诉求</span>
                        <div class="des-list">
                            <p>拟实施数转方向：华为</p>
                            <p>拟采用服务商：华为、小米、步步高</p>
                            <p>拟采用产品：华为、小米、步步高</p>
                            <p>期望服务商支撑事项：20 万元</p>
                            <p>期望政府支撑事项：华为、小米、步步高</p>
                            <p>期望实施周期：华为、小米、步步高</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="expertIndex">
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.demand {
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
        padding: 30px 0 50px;
        font-size: 14px;
        line-height: 20px;
        text-shadow: 0px 2px 4px #ffffff;
        a {
            color: #333333;
            position: relative;
            margin-right: 10px;
            padding-right: 10px;
            &::before {
                content: '/';
                display: block;
                width: 1px;
                height: 16px;
                color: #333;
                position: absolute;
                right: 0;
                top: -1px;
            }
        }
        span {
            color: #0167fe;
        }
    }
    .demand-content {
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
        .content-detail {
            display: flex;
            justify-content: space-between;
            .content-l {
                padding: 30px 30px 40px 40px;
                width: 830px;
                background: url('/@/assets/images/bg-1.png') no-repeat;
                background-size: 100% 100%;
                border-radius: 10px;
                box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
                .info-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .info-title {
                        font-size: 24px;
                        line-height: 33px;
                        color: #333333;
                        font-weight: bold;
                        margin-bottom: 17px;
                    }
                    .info-tag {
                        display: flex;
                        flex-flow: wrap;
                        margin-top: 9;
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
                    .el-button {
                        height: 48px;
                        border-radius: 29px;
                        padding: 0 30px 0 23px;
                        cursor: no-drop;
                    }
                }
                .info-content {
                    display: flex;
                    flex-flow: wrap;
                    padding-top: 4px;
                    p {
                        font-weight: 500;
                        font-size: 16px;
                        color: #333333;
                        line-height: 22px;
                        margin-right: 100px;
                        margin-top: 20px;
                    }
                }
                .info-des {
                    li {
                        margin-top: 30px;
                        span {
                            @extend %label;
                        }
                        p {
                            padding: 20px 0 0 13px;
                            font-size: 14px;
                            color: #6d7280;
                            line-height: 20px;
                        }
                    }
                }
            }
            .content-r {
                width: 340px;
                padding: 30px 32px 30px 20px;
                background: url('/@/assets/images/bg-1.png') no-repeat;
                background-size: 100% 100%;
                border-radius: 10px;
                box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
                .company-label {
                    @extend %label;
                }
                .company-info {
                    .company-logo {
                        width: 118px;
                        height: 118px;
                        border-radius: 50%;
                        margin: 35px auto 30px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .company-des {
                        dt {
                            font-weight: 500;
                            font-size: 24px;
                            color: #333333;
                            line-height: 33px;
                            margin-bottom: 20px;
                        }
                        dd {
                            display: block;
                            font-weight: 500;
                            font-size: 16px;
                            color: #333333;
                            line-height: 22px;
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
        .content-des {
            margin: 30px 0 100px;
            background: #fff url('/@/assets/images/bg-3.png') no-repeat bottom
                center;
            background-size: 100% auto;
            box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
            border-radius: 10px;
            padding: 40px 30px;
            li {
                margin-bottom: 30px;
                .des-label {
                    @extend %label;
                }
                .des-list {
                    display: flex;
                    flex-flow: wrap;
                    padding-top: 20px;
                    p {
                        font-size: 14px;
                        color: #6d7280;
                        line-height: 20px;
                        margin-bottom: 20px;
                        width: 33.33%;
                    }
                }
                &:nth-child(2) {
                    .des-list {
                        p {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>
