/*
 * @Description: ESLint 规则
 * @Author: hairyOwl
 * @Date: 2022-06-29 10:57:27
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-24 17:19:32
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],
  parserOptions: {
    // 解析器
    parser: 'babel-eslint',
  },
  rules: {
    // 错误级别
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'quotes': 'warn', //单独设置规则级别
    'no-trailing-spaces': 'off',
    'spaced-comment': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'arrow-body-style': 'off',
  },
};
