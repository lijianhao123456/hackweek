import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  routes:[
    { path: '/',
      redirect: '/login' },
    {
      path: "/login",
      name: "Home",
      component: () => import("../views/login.vue"),
      meta: { keepAlive: true }
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("../views/Home.vue"),
      meta: { keepAlive: true }
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
      meta: { keepAlive: true }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/register.vue"),
      meta: { keepAlive: true }
    },
    {
      path: "/me",
      name: "me",
      component: () => import("../views/me.vue"),
      meta: { keepAlive: true }
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/message.vue"),
      meta: { keepAlive: true }
    },
  ]
});

router.beforeEach((to,from,next)=>{
  // const token = store.state.token ? store.state.token : window.sessionStorage.getItem("token")

  if(to.path==='/login')return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next("/login")
  next()
})

export default router;
