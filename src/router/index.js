/*
 * @Description:路由配置
 * @Author: hairyOwl
 * @Date: 2022-07-07 12:10:13
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-23 19:01:51
 */
import { createRouter, createWebHistory } from 'vue-router';

/* 
公开路由表
*/
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '@/views/test.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes,
});

export default router;
