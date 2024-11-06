<template>
    <div class="pagination-box">
        <el-pagination 
            :background="background"
            :page-size="limit"
            :page-sizes="pageSizes"
            :current-page="currentPage"
            :layout="layout"
            :total="total"
            :small="small"
            v-bind="$attrs" 
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script setup lang="ts" name="pagination">
import { computed } from 'vue'
// 定义父组件传过来的值
const props = defineProps({
    total: {
        required: true,
        type: Number
    },
    page: {
        type: Number,
        default: 1
    },
    limit: {
        type: Number,
        default: 10
    },
    pageSizes: {
        type: Array,
        default() {
            return [10, 20, 30, 50, 100]
        }
    },
    layout: {
        type: String,
        default: 'total, prev, pager, next, jumper'
    },
    background: {
        type: Boolean,
        default: true
    },
    autoScroll: {
        type: Boolean,
        default: true
    },
    small: {
        type: Boolean,
        default: true
    },
    hidden: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:page', 'update:limit', 'pagination'])
const currentPage = computed({
    get() {
        return props?.page
    },
    set(val: Number) {
        emit('update:page', val)
    }
})
const pageSize = computed({
    get() {
        return props?.limit
    },
    set(val: Number) {
        emit('update:limit', val)
    }
})
const handleSizeChange = (val: Number) => {
    emit('pagination', { page: currentPage.value, limit: val })
}
const handleCurrentChange = (val: Number) => {
    emit('pagination', { page: val, limit: pageSize.value })
}
</script>

<style scoped lang="scss">
.pagination-box{
    display: flex;
    justify-content: center; 
    margin-bottom: 57px;
}
/* .pagination-container {
      background: #fff;
      padding: 32px 16px;
    }
    .pagination-container.hidden {
      display: none;
    } */
</style>
