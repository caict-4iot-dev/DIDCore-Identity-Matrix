<template>
    <div class="enterprise">
        <div class="enterprise-list">
            <Title title="企业信息" />
            <div class="enterprise-main">
                <div class="enterprise-info">
                    <div class="user-info">
                        <div class="info-img">
                            <img :src="getAssetURL('user.png')" alt="" />
                        </div>
                        <h3>企业名称名称名称技术服务有限公司</h3>
                    </div>
                    <div class="info-btn">
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
                        <span>企业编码</span>
                        <div class="list-cont">
                            <text>bMJWvEsqFRkQKig</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>企业名称</span>
                        <div class="list-cont">
                            <text>北京好名字好名字技术服务有限公司</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>统一代码</span>
                        <div class="list-cont">
                            <text>32345354GFGFG34456</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>企业性质</span>
                        <div class="list-cont">企业性质</div>
                    </li>
                    <li>
                        <span>企业类型</span>
                        <div class="list-cont">企业类型</div>
                    </li>
                    <li>
                        <span>企业规模</span>
                        <div class="list-cont">企业规模</div>
                    </li>
                    <li>
                        <span>注册机关</span>
                        <div class="list-cont">注册机关</div>
                    </li>
                    <li>
                        <span>注册地址</span>
                        <div class="list-cont">
                            <text>北京市海淀区中关村南大街24号一二三大厦</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>通讯地址</span>
                        <div class="list-cont">
                            <text>北京市海淀区中关村南大街24号一二三大厦</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>注册资本</span>
                        <div class="list-cont">1,000万(元)</div>
                    </li>
                    <li>
                        <span>成立日期</span>
                        <div class="list-cont">2024-05-20</div>
                    </li>
                    <li>
                        <span>官网网站</span>
                        <div class="list-cont">
                            <text>qwertyuiop.asdfghjkl</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li class="one">
                        <span>企业简介</span>
                        <div class="list-cont">
                            北京好名字技术服务有限公司成立于2024年05月20日，注册地位于北京市海淀区中关村南大街1234号软件园智慧谷园区9号楼20层2024室，法定代表人为张三。经营范围包括一般项目：软件开发；计算机系统服务；企业管理咨询；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；信息技术咨询服务；数据处理和存储支持服务；网络设备销售；信息安全设备销售；工业互联网数据服务；工业自动控制系统装置销售；工业控制计算机及系统销售；信息系统运行维护服务；电子产品销售；计算机软硬件及辅助设备零售；工业控制计算机及系统制造；计算机软硬件及外围设备制造（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）北京好名字好名字技术服务有限公司对外投资1家公司。
                        </div>
                    </li>
                    <li class="one">
                        <span>企业证件照片</span>
                        <div class="list-cont">
                            <div class="img-list">
                                <el-image
                                    :src="getAssetURL('pic-1.jpg')"
                                    :zoom-rate="1.2"
                                    :max-scale="7"
                                    :min-scale="0.2"
                                    :preview-src-list="[getAssetURL('pic-1.jpg')]"
                                    :initial-index="4"
                                    fit="cover"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="enterprise-list">
            <Title title="企业联系信息" />
            <div class="enterprise-main">
                <div class="enterprise-info">
                    <div class="user-info">
                        <div class="info-img">
                            <img :src="getAssetURL('user.png')" alt="" />
                        </div>
                        <h3>企业名称名称名称技术服务有限公司</h3>
                    </div>
                    <div class="info-btn">
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
                        <span>法定代表人</span>
                        <div class="list-cont">
                            张小明
                        </div>
                    </li>
                    <li>
                        <span>联系人电话</span>
                        <div class="list-cont">
                            <text>138****000</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>邮箱</span>
                        <div class="list-cont">
                            <text>138****000@163.com</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>法人证件类型</span>
                        <div class="list-cont">身份证</div>
                    </li>
                    <li>
                        <span>法人证件号</span>
                        <div class="list-cont">
                            <text>123456********7890</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li>
                        <span>传真</span>
                        <div class="list-cont">
                            <text>dfghjkytrt@********.com</text>
                            <em>
                                <svgIcon
                                    :size="12"
                                    :name="getAssetURL('icon/icon-copy.svg')"
                                ></svgIcon>
                                复制
                            </em>
                        </div>
                    </li>
                    <li class="one">
                        <span>法人证件照片</span>
                        <div class="list-cont">
                            <div class="img-list">
                                <el-image
                                    :src="getAssetURL('pic-2.jpg')"
                                    :zoom-rate="1.2"
                                    :max-scale="7"
                                    :min-scale="0.2"
                                    :preview-src-list="[getAssetURL('pic-2.jpg')]"
                                    :initial-index="4"
                                    fit="contain"
                                />
                            </div>
                            <div class="img-list">
                                <el-image 
                                    :src="getAssetURL('pic-2.jpg')" 
                                    :preview-src-list="[getAssetURL('pic-2.jpg')]"
                                    fit="contain"
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="personalIndex">
import { defineAsyncComponent } from 'vue'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
const Title = defineAsyncComponent(() => import('./title.vue'))
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.enterprise {
    width: 100%;
    
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
    &-list{
        margin-bottom: 20px;
        background: #fff;
        &:last-child{
            margin:0;
        }
    }
    &-main {
        width: 100%;
        padding: 30px;
        .enterprise-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .user-info {
            display: flex;
            align-items: center;
            width: calc(100% - 144px);
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
                max-width: calc(100% - 100px);
                margin: 0 20px;
                @include text-no-wrap();
            }
        }
        .info-btn {
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
            flex-flow: wrap;
            li {
                width: 33.333%;
                margin-bottom: 40px;
                &.one{
                    width: 100%;
                }
                span {
                    @extend %label;
                }
                .list-cont {
                    display: flex;
                    margin-top: 20px;
                    padding-left: 13px;
                    font-size: 14px;
                    color: #333333;
                    line-height: 20px;
                    text{
                        margin-right: 10px;
                        max-width: 70%;
                        @include text-no-wrap();
                    }
                    em{
                        cursor: pointer;
                        color:#0167FE;
                        font-size: 12px;
                    }
                    .img-list{
                        margin-right: 50px;
                        width: 160px; 
                        height: 120px;
                        border-radius: 8px;
                        border: 1px solid rgba(152,163,183,0.4);
                        overflow: hidden;
                        .el-image,img{
                            width: 100%;
                            height: 100%;  
                        }          
                    }
                }
            }
        }
    }
}
</style>
