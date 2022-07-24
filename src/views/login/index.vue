<!--
 * @Description: 登录页面
 * @Author: hairyOwl
 * @Date: 2022-07-07 21:29:07
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-24 17:14:38
-->
<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg" /> -->
          <svg-icon icon="user" />
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input placeholder="password" name="password" v-model="loginForm.password"></el-input>
        <span class="show-pwd">
          <svg-icon icon="eye" />
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { validatePassword } from './rules';
// script setup 导入的组件可以直接使用 不需要在component注册使用
// 1.  为 el-form 绑定 model 属性
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456',
});
// 2.  为 el-form 绑定 rules 属性
// 验证规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur', //验证触发时机为，失去焦点
      message: '用户名称为必填项',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword(),
    },
  ],
});
// 3.  为 el-form-item 绑定 prop 属性
</script>

<style lang="scss" scoped>
// 全局变量 颜色
$bg: #2d3a4d;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%; //最小高度
  width: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  // 表格样式
  .login-form {
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      //表单域
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        border-radius: 0px;
        padding: 12px 5px 12px 5px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
  }

  // input 左图标
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle; //居中对齐
    display: inline-block;
  }

  // 标题
  .title-container {
    position: relative;
    font-size: 26px;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  // 密码右图标
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
