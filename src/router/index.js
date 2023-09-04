import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/rent',
      name: 'rent',
      component: () => import('../views/rent.vue'),
    },
    {
      path: '/rentorder',
      name: 'rentorder',
      component: () => import('../views/rentorder.vue')
    },
  ]
})

export default router
