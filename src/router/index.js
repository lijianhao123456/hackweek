import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

Vue.use(VueRouter);


const router = new VueRouter({
  mode: "history",
  routes:[
    {
      path: "/",
      name: "Home",
      component: () => import("../views/login.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/register.vue")
    }
  ]
});

// router.beforeEach((to,from,next)=>{
//   const token = store.state.token ? store.state.token : window.sessionStorage.getItem("token")

//   if(to.path==='/')return next();
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next("./login")
//   next()
// })

export default router;
