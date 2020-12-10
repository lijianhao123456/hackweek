import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: "start",
      component: () => import("../views/start.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
      meta: { keepAlive: true, index: 1 }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/register.vue"),
      meta: { keepAlive: true, index: 2 }
    },
    {
      path: "/follow",
      name: "follow",
      component: () => import("../views/follow.vue"),
      meta: { keepAlive: true, index: 3 }
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("../views/Home.vue"),
      meta: { keepAlive: true, index: 4 }
    },
    {
      path: "/searchPage",
      name: "searchPage",
      component: () => import("../views/searchPage.vue"),
      meta: { keepAlive: true, index: 4 }
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/detail.vue"),
      meta: { keepAlive: true, index: 5 }
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
      meta: { keepAlive: true, index: 3 }
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/message.vue"),
      meta: { keepAlive: true, index: 7 }
    },
    {
      path: "/me",
      name: "me",
      component: () => import("../views/me.vue"),
      meta: { keepAlive: true, index: 8 }
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/edit.vue"),
      meta: { keepAlive: true, index: 8 }
    },
    {
      path: "/followers",
      name: "followers",
      component: () => import("../views/followers.vue"),
      meta: { keepAlive: true, index: 8 }
    },
    // {
    //   path: "/llq",
    //   name: "llq",
    //   component: () => import("../views/llq.vue"),
    //   meta: { keepAlive: true, index: 8 }
    // }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next();
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next("/login")
//   next()
// })

export default router;
