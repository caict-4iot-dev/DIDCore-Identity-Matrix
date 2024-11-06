<template>
    <div>
        <div class="active-box">
            <div class="active-l">
                <div class="active-item">
                    <img
                        :src="getAssetURL('defult-3.png')"
                        class="item-img"
                        alt=""
                    />
                    <div class="active-info">
                        <h3>
                            {{ activityList[0].title }}
                        </h3>
                        <p>
                            <em>活动地点：{{ activityList[0].address }}</em>
                            <span class="info-tag tag-progress">
                                正在进行中
                            </span>
                        </p>
                    </div>
                </div>
                <ul class="active-list">
                    <li
                        v-for="(item, index) in activityList.slice(1, 5)"
                        :key="index"
                    >
                        <a :href="`/course/activity/detail?type=${item.type}`">
                            <div class="active-time">
                                <b>
                                    <em>05-25</em>
                                    2024年
                                </b>
                                <span
                                    class="info-tag"
                                    :class="{
                                        'tag-end': item.type === 2,
                                        'tag-begin': item.type === 1
                                    }"
                                >
                                    {{
                                        item.type === 1
                                            ? '进行中'
                                            : item.type === 2
                                            ? '已结束'
                                            : '报名中'
                                    }}
                                </span>
                            </div>
                            <h3>{{ item.title }}</h3>
                            <p>活动地点：{{ item.address }}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="active-r">
                <el-calendar ref="calendar">
                    <template #header="{ date }">
                        <div class="calendar-title">
                            <em>{{ date }}</em>
                            <span>(共3场)</span>
                        </div>
                        <div class="calendar-list">
                            <span @click="selectDate('prev-month')">
                                <svgIcon
                                    class="icon-tag"
                                    :name="getAssetURL('icon/icon-l.svg')"
                                    color="#0167FE"
                                    :size="7"
                                />
                                上个月
                            </span>
                            <span @click="selectDate('today')">今天</span>
                            <span @click="selectDate('next-month')">
                                下个月
                                <svgIcon
                                    class="icon-tag"
                                    :name="getAssetURL('icon/icon-r.svg')"
                                    color="#0167FE"
                                    :size="7"
                                />
                            </span>
                        </div>
                    </template>
                    <template #date-cell="{ data }">
                        <span
                            :class="{
                                active: data.day
                                    .split('-')
                                    .slice(2)
                                    .join('-')
                                    .includes('7')
                            }"
                        >
                            {{ data.day.split('-').slice(2).join('-') }}
                        </span>
                    </template>
                </el-calendar>
            </div>
        </div>
        <div class="more-view">
            <router-link to="/course/activity">
                查看更多
                <svgIcon
                    :name="getAssetURL('icon/arrow-right.svg')"
                    :size="16"
                    color="#0167FE"
                    class="icon-arrow-right"
                />
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts" name="assess">
import { ref } from 'vue'
import type { CalendarDateType, CalendarInstance } from 'element-plus'
import { getAssetURL } from '/@/assets/scripts/getAssetsFile'
import { activityList } from '/@/mock/activity'
const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
    if (!calendar.value) return
    calendar.value.selectDate(val)
}
</script>
<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.active-box {
    display: flex;
    justify-content: space-between;
    .info-tag {
        height: 22px;
        line-height: 22px;
        padding: 0 9px;
        border-radius: 4px;
        color: #fff;
        &.tag-progress {
            background: #ff5e5e;
        }
        &.tag-begin {
            background: #0167fe;
        }
        &.tag-end {
            background: #98a3b7;
        }
    }
    .active-l {
        width: 780px;
        .active-item {
            display: flex;
            justify-content: space-between;
            padding: 16px;
            background: linear-gradient(180deg, #fff6f5 0%, #ffffff 100%);
            box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
            border-radius: 10px;
            margin-bottom: 20px;
            .item-img {
                width: 170px;
                height: 92px;
                border-radius: 10px;
            }
            .active-info {
                width: calc(100% - 186px);
                h3 {
                    font-weight: 500;
                    font-size: 20px;
                    color: #333333;
                    line-height: 40px;
                    @include text-no-wrap();
                }
                p {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 27px;
                    em {
                        font-size: 14px;
                        color: #6d7280;
                        line-height: 20px;
                    }
                }
            }
        }
        .active-list {
            display: flex;
            flex-flow: wrap;
            margin: 0 -10px;
            li {
                width: 380px;
                margin: 0 10px 20px;
                padding: 14px 16px 15px;
                background: #ffffff;
                box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
                border-radius: 10px;
                .active-time {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    b {
                        font-weight: normal;
                        font-size: 12px;
                        color: #333333;
                        line-height: 17px;
                        em {
                            font-size: 18px;
                            color: #333333;
                            line-height: 25px;
                            font-weight: 500;
                        }
                    }
                }
                h3 {
                    font-weight: 500;
                    font-size: 16px;
                    color: #333333;
                    line-height: 22px;
                    margin: 13px 0 12px;
                    @include text-no-wrap();
                }
                p {
                    font-size: 14px;
                    color: #6d7280;
                    line-height: 20px;
                }
            }
        }
    }
    .active-r {
        width: calc(100% - 800px);
        background: #ffffff;
        padding: 20px 30px;
        box-shadow: 0px 0px 10px 1px rgba(45, 79, 130, 0.1);
        border-radius: 10px;
    }
}
.active-r {
    :deep(.el-calendar) {
        .el-calendar__header {
            padding: 0;
            border: 0;
            .calendar-title {
                display: flex;
                align-items: center;
                em {
                    font-weight: 500;
                    font-size: 20px;
                    color: #333333;
                    line-height: 28px;
                    margin-right: 10px;
                }
                span {
                    font-weight: 600;
                    font-size: 12px;
                    color: #ff5e5e;
                }
            }
            .calendar-list {
                display: flex;
                span {
                    display: block;
                    padding: 0 5px;
                    font-size: 12px;
                    color: #0167fe;
                    height: 24px;
                    line-height: 24px;
                    cursor: pointer;
                    background: rgba(1, 103, 254, 0.1);
                    &:nth-child(1) {
                        border-radius: 4px 0px 0px 4px;
                        .icon-tag {
                            margin-right: 5px;
                        }
                    }
                    &:nth-child(2) {
                        margin: 0 1px;
                        font-weight: 600;
                    }
                    &:nth-child(3) {
                        border-radius: 0 4px 4px 0;
                        .icon-tag {
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
        .el-calendar__body {
            padding: 35px 0 0;
            .el-calendar-table {
                td {
                    border: 0;
                    font-size: 16px;
                    color: #333;
                    &.is-selected {
                        background-color: #0167fe;
                        color: #fff;
                        border-radius: 10px;
                    }
                    .el-calendar-day {
                        height: 44px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        &:hover {
                            background-color: #0167fe;
                            color: #fff;
                            border-radius: 10px;
                        }
                        span {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            height: 100%;
                            position: relative;
                            &.active {
                                &::before {
                                    content: '';
                                    display: block;
                                    @include abs(auto, auto, -7px, 50%);
                                    @include radius(5px);
                                    background: #ff5e5e;
                                    transform: translateX(-50%);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
