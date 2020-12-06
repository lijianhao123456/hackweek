<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <button @click="goToAbout">adasds</button>
    <button @click="login">11111111</button>
    <navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";
import axios from "axios";
import Waterfall from "../components/waterfall.vue";

export default {
  name: "Home",
  components: {
    navigation,
    Waterfall,
  },
  methods: {
    goToAbout: function () {
      this.$router.push("/About");
    },
    login: function () {
      console.log(this.loginForm)
      this.$store.dispatch("login",{
        loginForm:this.loginForm,
        router:this.$router});
      // axios({
      //   method: "POST",
      //   url: "http://192.168.2.182:8080",
      //   data: {
      //     "username": username,
      //     "password": password,
      //   },
      // }).then((res) => {
      //   axios({
      //     url: "http://192.168.2.182:8080",
      //     method: "GET",
      //     data: res.data.token,
      //   }).then((res) => {
      //     if (res.data.status === 0) {
      //       Toast(res.data.message);
      //     } else {
      //       Toast(res.data.message);
      //       this.$router.push({ path: "/" });
      //     }
      //   });
      // });
    },
  },
  data() {
    return {
      loginForm: {
        username: "qwe",
        password: "123",
      },
      userToken: "",
    };
  },
  computed: {
    data() {
      // 获取store里的数据，放在computed中可以实时更新
      // return this.$store.state.data;
    },
  },
  created() {
    // 请求数据
    axios({
      data: {},
      method: "get",
      baseURL: "http://192.168.50.181:8080",
      url: "/api/v1/user",
    }).then((res) => {
      let _this = this;
      // 把数据传到vuex里面
      _this.$store.commit("setData", res.data.data); //res.data.data 为请求返回的数据
    });
  },
};
</script>
<style scoped>
</style>
