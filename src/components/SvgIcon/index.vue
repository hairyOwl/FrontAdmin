<!--
 * @Description: 图标处理
 * @Author: hairyOwl
 * @Date: 2022-07-22 12:12:49
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-23 10:53:54
-->
<template>
  <!-- 展示外部图标 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <!-- 展示内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { isExternal as external } from '@/utils/validate';
import { defineProps, computed } from 'vue';

const props = defineProps({
  //获取使用图标的路径
  // icon 图标
  icon: {
    type: String,
    required: true,
  },
  // 图标类名(处理样式)
  className: {
    type: String,
    default: '',
  },
});
/* 
图标的计算属性
*/
// 1.判断当前图标是否是外部图标
const isExternal = computed(() => external(props.icon));
// 2.外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`,
}));
// 3.内部图标样式
const iconName = computed(() => `#icon-${props.icon}`);
</script>

<style lang="scss" scoped>
// 内部图标样式
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
// 外部图标样式
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
