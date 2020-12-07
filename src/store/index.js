import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Vuex)

axios.defaults.baseURL = 'http://47.103.200.147:8080'
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
          Toast.fail(res.msg);
        }
      } catch (error) {
        console.log(error);
        Toast.fail("连接失败")
      }
    },
    async login(context, value) {
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
      })
    },
    // async getAllInfo(context, value) {
    //   const info1 = await axios({
    //     method: 'get',
    //     url: "/figure/0",
    //   })
    //   const info2 = await axios({
    //     method: 'get',
    //     url: "/figure/1",
    //   })
    //   const info3 = await axios({
    //     method: 'get',
    //     url: "/figure/2",
    //   })
    //   const info4 = await axios({
    //     method: 'get',
    //     url: "/figure/3",
    //   })
    //   const info5 = await axios({
    //     method: 'get',
    //     url: "/figure/4",
    //   })
    //   console.log(info);
    //   context.commit('getInfo1', info1.data.data)
    //   context.commit('getInfo2', info2.data.data)
    //   context.commit('getInfo3', info3.data.data)
    //   context.commit('getInfo4', info4.data.data)
    //   context.commit('getInfo5', info5.data.data)
    // },
    async getInfo(context, value) {
      const res = await axios({
        method: 'get',
        url: `/figure/${value}`,
      })
      context.commit(`getInfo${value}`, res.data.data)
    },
  },
  modules: {
  }
})
