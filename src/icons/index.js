/*
 * @Description: 本地svg注册
 * @Author: hairyOwl
 * @Date: 2022-07-23 17:22:52
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-23 18:31:27
 */
// 1.导入所有的svg图标
// 2.完成SvgIcon全局注册
import SvgIcon from '@/components/SvgIcon/index.vue';

// webpack 依赖管理 https://webpack.docschina.org/guides/dependency-management/#requirecontext
const svgRequire = require.context('./svg', false, /\.svg$/);
// 返回一个Require函数，可接收一个request的参数，用于require的导入
// 导出函数有三个属性：resolve, keys, id 。可以用过svgRequire.keys()获取所有的svg图标
// 遍历图标，svgRequire.keys()作为导出函数的request参数，完成本地svg图标的导入
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon));

export default (app) => {
  //app是main.js的Vue实例
  app.component('svg-icon', SvgIcon);
};
