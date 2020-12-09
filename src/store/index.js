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
    information0: [
      { owner: "3", info: "李健豪好菜", likes: "20" },
      { owner: "333", info: "李健豪好菜", likes: "20" },
      { owner: "1", info: "李健豪好菜", likes: "20" },
      { owner: "1", info: "李健豪好菜", likes: "20" },
    ],
    information1: [
      { owner: "3", info: "刘珞芊好强", likes: "999" },
      { owner: "333", info: "刘珞芊好强", likes: "888" },
      { owner: "1", info: "刘珞芊好强", likes: "777" },
      { owner: "1", info: "刘珞芊好强", likes: "666" },
    ],
    information2: [
      { owner: "666", info: "郭芳泉好强", likes: "999" },
      { owner: "555", info: "郭芳泉好强", likes: "888" },
      { owner: "4", info: "郭芳泉好强", likes: "777" },
      { owner: "1", info: "郭芳泉好强", likes: "666" },
    ],
    information3: [
      { owner: "666", info: "龙伟好强", likes: "999" },
      { owner: "555", info: "龙伟好强", likes: "888" },
      { owner: "4", info: "龙伟好强", likes: "777" },
      { owner: "1", info: "龙伟好强", likes: "666" },
    ],
    information4: [
      { owner: "666", info: "大家都好强", likes: "999" },
      { owner: "555", info: "大家都好强", likes: "888" },
      { owner: "4", info: "大家都好强", likes: "777" },
      { owner: "1", info: "大家都好强", likes: "666" },
    ],
    search: [
      // { owner: "666", info: "大家都好强", likes: "999" },
      // { owner: "555", info: "大家都好强", likes: "888" },
      // { owner: "4", info: "大家都好强", likes: "777" },
      // { owner: "1", info: "大家都好强", likes: "666" },
    ]
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      window.sessionStorage.setItem('token', token)
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
    }
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
      // if (res.data.status == 200) {
      //   console.log("获取成功");
      //   Toast.success("获取信息成功");
      // } else {
      //   Toast.fail("获取信息失败");
      // }
      context.commit(`getInfo${value}`, res.data.data)
    },
    async search(context, value) {
      const res = await axios({
        method: 'post',
        url: '/search',
        data: value
      })
      context.commit("getSearch", res.data.data)
    }
  },
  modules: {
  }
})
