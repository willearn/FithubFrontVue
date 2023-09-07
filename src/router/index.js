import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/rent",
      name: "rent",
      component: () => import("../views/rent.vue"),
    },
    {
      path: "/rentorder",
      name: "rentorder",
      component: () => import("../views/rentorder.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/register.vue"),
    },
    {
      path: "/course",
      name: "course",
      component: () => import("../views/course.vue"),
    },
    {
      path: "/course/:categoryid",
      name: "courseCategory",
      component: () => import("../views/course.vue"),
    },
    {
      path: "/course/detail/:courseid",
      name: "courseDetail",
      component: () => import("../views/courseDetail.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/cart.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/checkout.vue"),
    },
    {
      path: "/ordercheck",
      name: "ordercheck",
      component: () => import("../views/orderCheck.vue"),
    },
  ],
});

export default router;
