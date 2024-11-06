<template>
    <div class="screen-body">
        <div class="screen-main">
            <div class="screen-search">
                <el-input
                    v-model="state.keyword"
                    :placeholder="`请输入您想要查找的${getTypeName}`"
                    @keyup.enter="handleEnter"
                >
                    <template #suffix>
                        <svgIcon name="ele-Search" />
                    </template>
                </el-input>
                <el-button
                    v-if="getType !== 'case'"
                    @click="goPage"
                    type="primary"
                >
                    <svgIcon name="ele-Promotion" />
                    发布需求
                </el-button>
            </div>
            <div class="screen-box">
                <ul class="screen-list">
                    <li
                        class="list-item"
                        v-for="(item, index) in getList"
                        :key="index"
                    >
                        <span class="item-label">{{ item.label }}</span>
                        <div class="screen-tag">
                            <span
                                @click="handleTag(tag, item.type, index)"
                                v-for="(tag, i) in item.list"
                                :key="i"
                            >
                                <i :class="{ active: tag.active }">
                                    {{ tag.label }}
                                </i>
                            </span>
                        </div>
                    </li>
                </ul>
                <div class="screen-opt">
                    <span class="opt-label">已筛选项</span>
                    <div class="opt-condit">
                        <span
                            class="condit-item"
                            v-for="(item, index) in state.tagList"
                            :key="index"
                        >
                            {{ item.label }}
                            <svgIcon
                                name="ele-Close"
                                @click="closeHandle(item)"
                            />
                        </span>
                    </div>
                    <span class="empty-btn" @click="clearHandle">
                        清空所有条件
                        <svgIcon name="ele-Delete" />
                    </span>
                </div>
            </div>
        </div>
        <div class="screen-tab">
            <span
                :class="{ active: state.activeIndex === 0 }"
                @click="changeTab(0)"
            >
                最新发布
            </span>
            <span
                :class="{ active: state.activeIndex === 1 }"
                @click="changeTab(1)"
            >
                最多浏览
            </span>
        </div>
    </div>
</template>

<script setup lang="ts" name="titleHeader">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
const emit = defineEmits(['handleTag', 'changeTab','handleEnter'])
const router = useRouter()
// 定义父组件传过来的值
const props = defineProps({
    list: {
        type: Array
    },
    type: {
        type: String
    },
    chooseList: {
        type: Array
    }
})
const state = reactive({
    keyword: '',
    tagList: [] as any,
    activeIndex: 0
})
// 获取
const getList = computed(() => { 
    return props?.list as any
})
const getType = computed(() => {
    return props?.type
})
const getTypeName = computed(()=>{
    let name = '案例'
    switch(getType.value){ 
            case 'product':
                name = '产品'
            break;
            case 'scheme':
                name = '方案'
            break;
            case 'institut':
                name = '机构'
            break;
    }
    return name
})
const handleTag = (tag: any, type: string, index: number) => {
    tag.type = type
    tag.index = index

    if (tag.label === '全部') {
        state.tagList = state.tagList.filter((item: any) => {
            return item.type !== type
        })
    } else {
        if (tag.type !== 'mode') {
            state.tagList = state.tagList.filter((item: any) => {
                return item.type !== tag.type
            })
            state.tagList.push(tag)
        } else {
            if (!state.tagList.includes(tag)) {
                state.tagList.push(tag)
            }
        }
    }
    screenHandle()
}
const closeHandle = (tag: any) => {
    state.tagList = state.tagList.filter((item: any) => {
        return item.label !== tag.label
    })
    screenHandle()
}
const clearHandle = () => {
    state.tagList = []
    screenHandle()
}
const screenHandle = () => {
    let list = getList.value
    list.forEach((item: any) => {
        item.list.forEach((v: any) => {
            if (v.label !== '全部') {
                v.active = false
            } else {
                v.active = true
            }
            state.tagList.forEach((k: any) => {
                if (v.label === k.label) {
                    v.active = true
                }
                if (k.type === item.type && v.label === '全部') {
                    v.active = false
                }
            })
        })
    })
    emit('handleTag', state.tagList)
}
const changeTab = (index: number) => {
    state.activeIndex = index
    emit('changeTab', index)
}
const goPage = () => {
    router.push('/hall/demand/requirements')
}
const handleEnter = ()=>{
    emit('handleEnter',state.keyword)
}
</script>
<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.screen-body {
    padding-top: 30px;
    .screen-main {
        padding: 30px 24px 0;
        background: #edf5ff;
        border-radius: 10px;
    }
    .screen-search {
        display: flex;
        justify-content: center;
        .el-input {
            width: 480px;
            height: 58px;
            :deep(.el-input__wrapper) {
                border-radius: 29px;
                border: 0;
                box-shadow: none;
                padding: 0 44px 0 46px;
            }
        }
        .el-button {
            width: 144px;
            height: 58px;
            margin-left: 48px;
            border:0;
            font-size: 16px;
            color: #0167FE;
            background: radial-gradient( 125% 50% at 50% 50%, rgba(1,103,254,0.1) 0%, rgba(1,103,254,0.2) 100%), #FFFFFF;
            border-radius: 29px;
        }
    }
    .screen-box {
        padding-top: 54px;
        %label {
            font-weight: 600;
            font-size: 14px;
            color: #333333;
            line-height: 18px;
            margin-right: 24px;
        }
        .screen-list {
            border-bottom: 1px solid #d8dffb;
            .list-item {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                .item-label {
                    @extend %label;
                }
                .screen-tag {
                    display: flex;
                    flex-flow: wrap;
                    height: 18px;
                    overflow: hidden;
                    width: calc(100% - 150px);
                    span {
                        display: inline-block;
                        font-size: 14px;
                        color: #6d7280;
                        line-height: 18px;
                        height: 18px;
                        margin: 0 15px 10px 0;
                        cursor: pointer;
                        i.active {
                            font-weight: 600;
                            color: #0167fe;
                        }
                    }
                }
                em {
                    font-size: 14px;
                    color: #0167fe;
                    line-height: 18px;
                    cursor: pointer;
                }
            }
        }
        .screen-opt {
            display: flex;
            align-items: top;
            padding: 16px 0 20px;
            .opt-label {
                @extend %label;
                line-height: 26px;
            }
            %item {
                display: flex;
                align-items: center;
                padding: 0 3px 0 8px;
                height: 26px;
                line-height: 26px;
                background: rgba(1, 103, 254, 0.15);
                border-radius: 4px;
                font-size: 14px;
                color: #0167fe;
                margin-right: 10px;
                .el-icon {
                    margin: 0 5px;
                    cursor: pointer;
                }
            }
            .opt-condit {
                display: flex;
                flex-flow: wrap;
                max-width: calc(100% - 210px);
                .condit-item {
                    margin-bottom: 10px;
                    @extend %item;
                }
            }
            .empty-btn {
                @extend %item;
                background: #d8e1f1;
                color: #98a3b7;
                cursor: pointer;
            }
        }
    }
    .screen-tab {
        margin-top: 20px;
        display: flex;
        span {
            position: relative;
            display: inline-block;
            height: 30px;
            padding: 0 10px;
            line-height: 30px;
            font-size: 14px;
            color: #98a3b7;
            cursor: pointer;
            border-top: 1px solid rgba(1, 103, 254, 0.15);
            border-bottom: 1px solid rgba(1, 103, 254, 0.15);
            &.active {
                color: #0167fe;
            }
            &:last-child {
                border-radius: 0 4px 4px 0;
                border-right: 1px solid rgba(1, 103, 254, 0.15);
            }
            &:first-child {
                border-radius: 4px 0 0 4px;
                border-left: 1px solid rgba(1, 103, 254, 0.15);
                &::before {
                    content: '';
                    display: block;
                    width: 1px;
                    height: 16px;
                    background: rgba(1, 103, 254, 0.15);
                    @include abs(7px, 0, auto, auto);
                }
            }
        }
    }
}
</style>
