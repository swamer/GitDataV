/*
 * @Description: 
 * @Version: 1.0
 * @Autor: caohq33221
 * @Date: 2021-06-16 16:52:09
 * @LastEditors: codercao
 * @LastEditTime: 2021-06-17 10:42:37
 */

import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routers';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
// })
export default router