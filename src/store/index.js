import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Vuex)

axios.defaults.baseURL = 'http://47.103.200.147:8080'
// axios.defaults.baseURL = 'http://192.168.2.180:8080'
axios.defaults.timeout = 5000;
axios.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = "Bearer " + token //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })



export default new Vuex.Store({
  state: {
    token: window.sessionStorage.getItem('token'),
    id: window.sessionStorage.getItem('id'),
    username: window.sessionStorage.getItem('username'),
    information0: [],
    information1: [],
    information2: [],
    information3: [],
    information4: [],
    search: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      window.sessionStorage.setItem('token', token)
    },
    setId(state, id) {
      state.id = id
      window.sessionStorage.setItem('id', id)
    },
    setusername(state, username) {
      state.username = username
      window.sessionStorage.setItem('username', username)
    },
    getInfo0(state, info) {
      state.information0 = info
    },
    getInfo1(state, info) {
      state.information1 = info
    },
    getInfo2(state, info) {
      state.information2 = info
    },
    getInfo3(state, info) {
      state.information3 = info
    },
    getInfo4(state, info) {
      state.information4 = info
    },
    getSearch(state, info) {
      state.search = info
    },
    clearSearch(state) {
      state.search = []
    },
  },
  actions: {
    async register(context, value) {
      Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "注册中..."
      });
      try {
        let res = await axios({
          method: 'post',
          url: 'user/add',
          data: value.registerForm
        })
        if (res.data.status == 200) {
          // context.commit('setToken', res.data.token)
          Toast.success("注册成功");
          value.router.push("/login")
        } else {
          Toast.fail(res.data.msg);
        }
      } catch (error) {
        console.log(error);
        Toast.fail("注册失败")
      }
    },
    async login(context, value) {
      context.commit('setusername', value.loginForm.username)
      Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "加载中..."
      });
      console.log(context, value);
      const res = await axios({
        method: 'post',
        url: '/login',
        data: value.loginForm
      })
      if (res.data.status == 200) {
        console.log("登录成功");
        context.commit('setToken', res.data.token)
        context.commit('setId', res.data.id)
        Toast.success("登录成功");
        value.router.push("/Home")
      } else {
        Toast.fail(res.data.msg);
      }
    },
    async getInfo(context, value) {
      const res = await axios({
        method: 'get',
        url: `/figure/${value}`,
      })
      context.commit(`getInfo${value}`, res.data.data)
    },
    async search(context, value) {
      const res = await axios({
        method: 'post',
        url: '/search',
        data: value
      })
      context.commit("getSearch", res.data.data)
    },
    async changePwd(context, value) {
      const res = await axios({
        method: 'put',
        url: `/user/editPwd/${this.state.id}`,
        data: value.changeForm
      })
      if (res.data.status == 200) {
        Toast.success("修改成功");
        value.router.push("/me")
      } else {
        Toast.fail(res.data.msg);
      }
    },
    async deliver(context, value) {
      const res = await axios({
        method: "post",
        url: "/user/makeActivity",
        data: value.deliver
      })
    }
  },
  modules: {
  }
})
