<template>
    <div class="el-menu-horizontal-warp">
        <el-menu
            router
            :default-active="state.defaultActive"
            background-color="transparent"
            mode="horizontal"
        >
            <template v-for="val in menuLists">
                <el-sub-menu
                    :index="val.path"
                    v-if="val.children && val.children.length > 0"
                    :key="val.path"
                    expand-open-icon="ele-CaretTop"
                    expand-close-icon="ele-CaretBottom"
                >
                    <template #title>
                        <SvgIcon
                            :class="val.meta.iconClass"
                            :name="val.meta.icon"
                        />
                        <span>{{ val.meta.title }}</span>
                    </template>
                    <SubItem :chil="val.children" />
                </el-sub-menu>
                 <template v-else>
                    <el-menu-item :index="val.path" :key="val.path">
                        <template
                            #title
                            v-if="
                                !val.meta.isLink ||
                                (val.meta.isLink && val.meta.isIframe)
                            "
                        >
                            <SvgIcon
                                :class="val.meta.iconClass"
                                :name="val.meta.icon"
                            />
                            {{ val.meta.title }}
                        </template>
                        <template #title v-else>
                            <a class="w100" @click.prevent="onALinkClick(val)">
                                <SvgIcon
                                    :class="val.meta.iconClass"
                                    :name="val.meta.icon"
                                />
                                {{ val.meta.title }}
                            </a>
                        </template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts" name="navMenuHorizontal">
import { defineAsyncComponent, reactive, computed, onBeforeMount } from 'vue'
import { useRoute, onBeforeRouteUpdate, RouteRecordRaw } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useThemeConfig } from '/@/stores/themeConfig'
import other from '/@/assets/scripts/other'
// 引入组件
const SubItem = defineAsyncComponent(
    () => import('/@/layout/navMenu/subItem.vue')
)

// 定义父组件传过来的值
const props = defineProps({
    // 菜单列表
    menuList: {
        type: Array<RouteRecordRaw>,
        default: () => []
    }
})

// 定义变量内容
const storesThemeConfig = useThemeConfig()
const { themeConfig } = storeToRefs(storesThemeConfig)
const route = useRoute()

const state = reactive({
    defaultActive: '' as string | undefined
})

// 获取父级菜单数据
const menuLists = computed(() => {
    return <RouteItems>props.menuList
})
// 设置页面当前路由高亮
const setCurrentRouterHighlight = (currentRoute: RouteToFrom) => {
    const { path, meta } = currentRoute
    if (themeConfig.value.layout === 'classic') {
        state.defaultActive = `/${path?.split('/')[1]}`
    } else {
        const pathSplit = meta?.isDynamic
            ? meta.isDynamicPath!.split('/')
            : path!.split('/')
        if (pathSplit.length >= 4 && meta?.isHide)
            state.defaultActive = pathSplit.splice(0, 3).join('/')
        else state.defaultActive = path
    }
}
// 打开外部链接
const onALinkClick = (val: RouteItem) => {
    other.handleOpenLink(val)
}
// 页面加载前
onBeforeMount(() => {
    setCurrentRouterHighlight(route)
})
// 路由更新时
onBeforeRouteUpdate((to) => {
    setCurrentRouterHighlight(to)
})
</script>

<style scoped lang="scss">
.el-menu-horizontal-warp {
    overflow: hidden;
    height: 72px;
    .el-menu.el-menu--horizontal {
        display: flex;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }
}
</style>
