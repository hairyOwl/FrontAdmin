<!--
 * @Description: 主页
 * @Author: hairyOwl
 * @Date: 2022-06-29 10:57:27
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-06-30 09:43:58
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  created() {
    console.log('created');
  },
};
</script>
