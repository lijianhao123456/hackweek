<template>
  <div class="home">
    <login />

    <button @click="goToAbout">adasds</button>
    <button @click="login">11111111</button>
    <button @click="getInfo">1232132131</button>
    <navigation />

  </div>


</template>

<script>
// @ is an alias to /src
import login from "@/components/login.vue";
import navigation from "@/components/navigation.vue";
import axios from "axios";
import Waterfall from "../components/waterfall.vue";

export default {
  name: "Home",
  components: {
    navigation,
    Waterfall,
    login
  },
  methods: {
    getInfo:function(){
      this.$store.dispatch("getInfo")
    },
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
    information() {
      // 获取store里的数据，放在computed中可以实时更新
      return this.$store.state.information;
    },  
  },
};
</script>
<style scoped>
</style>
