import Cache from "@/utils/Cache";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },

  {
    name: "login",
    path: "/login",
    component: () => import("@/views/Login/Login.vue"),
  },

  {
    name: "main",
    path: "/main",
    component: () => import("@/views/Main/main.vue"),
    children: [
      {
        name: "CheckIn",
        path: "checkin",
        component: () => import("@/views/Main/system/check-in.vue"),
      },
      {
        name: "CheckInRecord",
        path: "checkin-record",
        component: () => import("@/views/Main/system/check-in-record.vue"),
      },
      {
        name: "CheckInSuccess",
        path: "checkin-success",
        component: () => import("@/components/check-in-success.vue"),
      },
      {
        name: "AskLeave",
        path: "askleave",
        component: () => import("@/views/Main/system/ask-leave.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = Cache.getCache("token");
    if (!token) return { path: "/login" };
  }
});

export default router;
