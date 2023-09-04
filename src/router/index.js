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
      component: () => import('../views/rent.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/course.vue')
    },
    {
      path: '/course/detail',
      name: 'courseDetail',
      component: () => import('../views/courseDetail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/checkout.vue')
    },
    {
      path: '/ordercheck',
      name: 'ordercheck',
      component: () => import('../views/orderCheck.vue')
    },
  ]
})

export default router
