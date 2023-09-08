import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue';
import { useRentOrderStore } from "../stores/rentorder.js"
import { storeToRefs } from 'pinia'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rent',
      name: 'rent',
      component: () => import('../views/rent.vue'),
    },
    {
      path: '/rentorder',
      name: 'rentorder',
      component: () => import('../views/rentorder.vue'),
      beforeEnter: (to, from, next) => {
        const rentOrderStore = useRentOrderStore();
        const { selectedClassroom } = storeToRefs(rentOrderStore);
        // 執行會員登入檢查
        if (selectedClassroom.value !== null) {
          next();
        } else {
          router.back();
        }
      }
    }, {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/activity.vue')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
  ],scrollBehavior (to, from, savedPosition) {
    if(savedPosition && to.meta.keepAlive){
      return savedPosition;
    }
    return{left:0,top:0};
  }
})

export default router
