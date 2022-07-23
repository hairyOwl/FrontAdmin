<!--
 * @Description:
 * @Author: hairyOwl
 * @Date: 2022-07-04 17:35:15
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-23 17:36:12
-->
<template>
  <h1>{{ count }}</h1>
  <button @click="inc">++</button>
  <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
  <div
    class="svg-external-icon svg-icon"
    data-v-c8a70580=""
    style="-webkit-mask: url('https://res.lgdsunday.club/user.svg') 50% 50% no-repeat"
  ></div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue';
import { ref } from 'vue';

const count = ref(0);
const inc = () => {
  count.value += 1;
};
</script>
