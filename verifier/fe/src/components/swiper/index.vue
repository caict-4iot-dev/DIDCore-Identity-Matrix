<template>
    <div :class="props.swiperClass" class="swiper-container">
        <swiper
            :modules="modules"
            :pagination="{ clickable: true }"
            :slides-per-view="props.showNum"
            :speed="props.speed"
            :loop="true"
            :space-between="0"
            :autoplay="props.autoplay"
        >
            <!-- swiper-slide根据prop接受的数组进行遍历 -->
            <swiper-slide v-for="(data, index) in swiperList" :key="index">
                <!-- 具名作用域插槽，将数组的每一项的数据放在这里 -->
                <slot name="item" :swiperItem="data"></slot>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules'
// 定义父组件传过来的值
const props = defineProps({
    swiperClass: {
        type: String,
        default: () => {
            return 'swiper'
        }
    },
    showNum: {
        type: Number,
        default: () => 1
    },
    autoplay: {
        type: Boolean,
        default: () => true
    },
    speed: {
        type: Number,
        default: () => 500
    },
    swiperList: {
        type: Array
    }
})
// 定义模板上使用的模块 模板上 :modules="modules" 才能使用
let modules = [Autoplay, Pagination, Scrollbar, A11y]
</script>

<style lang="scss" scoped>
.swiper-slide {
    display: flex;
    justify-content: space-between;
}
.swiper-container {
    .swiper {
        height: 100%;
    }
    :deep(.swiper-pagination) {
        bottom: 0;
        .swiper-pagination-bullet{
            background: #0167FE; 
        }
    }
}
</style>
