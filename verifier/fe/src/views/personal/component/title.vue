<template>
    <h4 class="personal-title">
        <span>{{ props.title }}</span> 
    </h4>
</template>

<script setup lang="ts" name="loginAccount">
const props = defineProps({
    title: {
        type: String,
        default: () => ''
    }
})
</script>

<style scoped lang="scss">
@import '/@/assets/scss/mixins/index.scss';
.personal-title {
    padding: 30px;
    border-bottom: 1px solid rgba(152, 163, 183, 0.2);
    span {
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
}
</style>
