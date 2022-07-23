/*
 * @Description:
 * @Author: hairyOwl
 * @Date: 2022-07-23 17:41:08
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-23 18:33:49
 */
import { createApp } from 'vue';
// 本地svg图片的导入
import installIcons from '@/icons/index';
import App from './App.vue';
import router from './router';
import store from './store';
import installElementPlus from './plugins/element';
// 初始化样式表 (全局样式表)
import '@/styles/index.scss';

const app = createApp(App);
installElementPlus(app);
installIcons(app);

app.use(store).use(router).mount('#app');
