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
        const { selectedClassroom ,checkOrder} = storeToRefs(rentOrderStore);
        console.log(checkOrder.value);

        const isLoggedIn = localStorage.getItem('isLogin');
          // 執行會員登入檢查
        if (isLoggedIn) {
          // 如果會員已登入，繼續進入目標路由
          next();
        } else {
          // 如果會員未登入，可以重定向到登入頁面或其他處理方式
          alert('請登入會員')
          next('/login'); // 例如，重定向到登入頁面
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
  ]
})

export default router
