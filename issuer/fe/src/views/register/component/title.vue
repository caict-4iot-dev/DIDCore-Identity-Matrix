<template>
    <h4 class="form-title">
        <span>{{ props.index }}</span>
        {{ props.title }}
    </h4>
</template>

<script setup lang="ts" name="loginAccount">
const props = defineProps({
    title: {
        type: String,
        default: () => ''
    },
    index: {
        type: String,
        default: () => '1'
    }
})
</script>

<style scoped lang="scss">
.form-title {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 18px;

    span {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: #333;
        border-radius: 50%;
        margin-right: 11px;
        color: #fff;
        line-height: 24px;
        text-align: center;
        font-size: 12px;
    }
}
</style>
