<template>
    <component :is="transverse" />
</template>

<script setup lang="ts" name="layout">
import { onBeforeMount, onUnmounted, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeConfig } from '/@/stores/themeConfig'
import { Local } from '/@/assets/scripts/storage'
import mittBus from '/@/assets/scripts/mitt'

const transverse = defineAsyncComponent(
    () => import('/@/layout/main/transverse.vue')
)

// 定义变量内容
const storesThemeConfig = useThemeConfig()
const { themeConfig } = storeToRefs(storesThemeConfig)

// 窗口大小改变时(适配移动端)
const onLayoutResize = () => {
    if (!Local.get('oldLayout'))
        Local.set('oldLayout', themeConfig.value.layout)
    const clientWidth = document.body.clientWidth
    if (clientWidth < 1000) {
        themeConfig.value.isCollapse = false
        mittBus.emit('layoutMobileResize', {
            layout: 'defaults',
            clientWidth
        })
    } else {
        mittBus.emit('layoutMobileResize', {
            layout: Local.get('oldLayout')
                ? Local.get('oldLayout')
                : themeConfig.value.layout,
            clientWidth
        })
    }
}
// 页面加载前
onBeforeMount(() => {
    onLayoutResize()
    window.addEventListener('resize', onLayoutResize)
})
// 页面卸载时
onUnmounted(() => {
    window.removeEventListener('resize', onLayoutResize)
})
</script>
