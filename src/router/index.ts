import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
