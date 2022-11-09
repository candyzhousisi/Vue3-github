import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/home/HomePage.vue";
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/detail/:login",
      name: "DetailPage",
      component: () => import("../pages/details/DetailPage.vue"),
    },
  ],
});
