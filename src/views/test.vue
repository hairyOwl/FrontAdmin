<!--
 * @Description:
 * @Author: hairyOwl
 * @Date: 2022-07-04 17:35:15
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-04 17:41:32
-->
<template>
  <h1>{{ count }}</h1>
  <button @click="inc">++</button>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
const inc = () => {
  count.value++;
};
</script>
