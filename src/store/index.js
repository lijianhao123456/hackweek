import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Vuex)

axios.defaults.baseURL = 'http://192.168.2.182:8080'
axios.defaults.timeout = 5000;
axios.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })



export default new Vuex.Store({
  state: {
    token: window.sessionStorage.getItem('token'),
    owner: '',
    details: '',
    comment: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      window.sessionStorage.setItem('token', token)
    },
    getInfo(state, page) {
      state
    }
    // updatalogindata(state,logindata){
    //         axios({
    //     method:'post',
    //     url:'',
    //     dataType:'json',
    //     data:context.state.form1
    //   }).then(res => {
    //     if (res.data.result == '200'){
    //       localStorage.setItem('data',JSON.stringify(res.data));
    //       let mess
    //     }
    //   state.logindata=logindata;
    // },
    // updatamessage(state,form1){
    //   state.form1=form1
    // }
  },
  actions: {
    register(context, value) {
      Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "注册中..."
      });
      axios({
        method: 'post',
        url: '/user/add',
        data: value.registerForm
      }).then(res => {
        if (res.data.status == 200) {
          // context.commit('setToken', res.data.token)
          Toast.success("登录成功");
          value.router.push("/login")
        } else {
          Toast.fail(res.msg);
        }
      }).catch(function (error) {
        console.log(error);
        Toast.fail("连接失败");
      });
    },
    login(context, value) {
      Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "加载中..."
      });
      console.log(context, value);
      axios({
        method: 'post',
        // baseURL: 'http://192.168.2.182:8080',
        // url: '/api/v1/user',
        url: '/login',
        data: value.loginForm
      }).then(res => {
        if (res.data.status == 200) {
          console.log("成功-清除加载");
          context.commit('setToken', res.data.token)
          Toast.success("登录成功");
          value.router.push("/Home")
        } else {
          Toast.fail(res.msg);
        }
      }).catch(function (error) {
        console.log(error);
        Toast.fail("连接失败");
      });
    },
    getInfo(context, value) {
      console.log(context, value);
      axios({
        method: 'post',
        headers: {
          'Authorization': 'passport ' + this.$store.data.token,
        },
        // baseURL: 'http://192.168.2.182:8080',
        // url: '/api/v1/user',
        // baseURL: 'http://192.168.2.182:8080',
        url: `/api/page{{value}}`,
      }).then(res => {
        context.commit('changeData', res.data.token)
      })
    },

  },

  // login(context){
  //   let message
  //   context.commit(updatalogindata)
  // axios({
  //   method:'post',
  //   url:'',
  //   dataType:'json',
  //   data:context.state.form1
  // }).then(res => {
  //   if (res.data.result == '200'){
  //     localStorage.setItem('data',JSON.stringify(res.data));
  //     let mess
  //   }
  // },
  modules: {
  }
})
