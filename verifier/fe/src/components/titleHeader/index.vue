<template>
  <div class="title-header" :style="setImgStyle">
    <div class="wrap">{{ getName }}</div>
  </div>
</template>

<script setup lang="ts" name="titleHeader">
import { computed } from 'vue'

// 定义父组件传过来的值
const props = defineProps({
  // 标题名字
  name: {
    type: String
  },
  bg:{
    type: String,
    default: ''
  }
})

// 获取 icon 图标名称
const getName = computed(() => {
  return props?.name
})
 // 设置背景图片
const setImgStyle = computed(() => {
  return `background-image:url(${props?.bg});background-size:cover;background-position: center center`
})
</script>
<style scoped lang="scss">
  .title-header{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;   
    .wrap{
      font-weight: 500;
      font-size: 32px;
      color: #333333;
      text-align: center;
    }
  }
</style>
