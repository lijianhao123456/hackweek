import Vue from "vue";
import VueRouter from "vue-router";

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
      meta: { index: 4 }
    },
    {
      path: "/me",
      name: "me",
      component: () => import("../views/me.vue"),
      meta: { keepAlive: true, index: 4 }
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/message.vue"),
      meta: { keepAlive: true, index: 4 }
    },
    {
      path: "/followers",
      name: "followers",
      component: () => import("../views/followers.vue"),
      meta: { keepAlive: true, index: 5 }
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
      meta: { keepAlive: true, index: 5 }
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/detail.vue"),
      meta: { keepAlive: true, index: 5 }
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/edit.vue"),
      meta: { keepAlive: true, index: 5 }
    },
    {
      path: "/changePwd",
      name: "changePwd",
      component: () => import("../views/changepwd.vue"),
      meta: { keepAlive: true, index: 5 }
    },
    {
      path: "/deliver",
      name: "deliver",
      component: () => import("../views/deliver.vue"),
      meta: { keepAlive: true, index: 5 }
    },
    {
      path: "/follower2",
      name: "follower2",
      component: () => import("../views/Follow2.vue"),
      meta: { keepAlive: true, index: 5 }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login' || to.path === '/register') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next("/login")
  next()
})

export default router;
