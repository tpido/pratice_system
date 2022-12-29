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
      {
        name: "AskLeaveRecord",
        path: "askleave-record",
        component: () => import("@/views/Main/system/ask-leave-record.vue"),
      },
      {
        name: "WriteLog",
        path: "writelog",
        component: () =>
          import("@/views/Main/system/workmanagement/write-log.vue"),
      },
      {
        name: "WritePraticeReport",
        path: "wirtepraticereport",
        component: () =>
          import("@/views/Main/system/workmanagement/write-pratice-report.vue"),
      },
      {
        name: "join-class",
        path: "join-class",
        component: () =>
          import("@/views/Main/system/classManagement/join-class.vue"),
      },
      {
        name: "activity-notice",
        path: "activity-notice",
        component: () => import("@/views/Main/system/activity-notice.vue"),
      },
    ],
  },
  {
    name: "main-teacher",
    path: "/main-teacher",
    component: () => import("@/views/mainTeacher/mainTeacher.vue"),
    children: [
      {
        name: "ask-for-leave-perimit",
        path: "ask-for-leave-perimit",
        component: () =>
          import("@/views/mainTeacher/main/ask-for-leave-perimit.vue"),
      },
      {
        name: "post-message",
        path: "post-message",
        component: () => import("@/views/mainTeacher/main/post-message.vue"),
      },
      {
        name: "check-log",
        path: "check-log",
        component: () => import("@/views/mainTeacher/main/check-log.vue"),
      },
      {
        name: "check-pratice-report",
        path: "check-pratice-report",
        component: () =>
          import("@/views/mainTeacher/main/check-pratice-report.vue"),
      },

      {
        name: "check-checkIn",
        path: "check-checkIn",
        component: () => import("@/views/mainTeacher/main/check-checkIn.vue"),
      },
      {
        name: "score-analysis",
        path: "score-analysis",
        component: () => import("@/views/mainTeacher/main/score-analysis.vue"),
      },
      {
        name: "score-report",
        path: "score-report",
        component: () => import("@/views/mainTeacher/main/score-report.vue"),
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
