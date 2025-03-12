import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/operating-systems",
    name: "operating-systems",
    meta: { transition: 'slide-left' },
    component: () => import("../views/OS/OperatingSystems.vue"),
  },
  {
    path: "/events-programming",
    name: "events-programming",
    component: () => import("../views/EventsProgramming/EventsProgramming.vue"),
  },
  {
    path: "/objects-programming",
    name: "objects-programming",
    component: () => import("../views/OOP/ObjectProgramming.vue"),
  },
  {
    path: "/linear-algebra",
    name: "linear-algebra",
    component: () => import("../views/LinearAlgebra/LinearAlgebra.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'bg-main-green'
});

export default router;
