<template>
  <div class="home">
    <div v-for="ia in information" :class="div">
        {{ ia.owner }}

    </div>
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
      console.log(this.loginForm);
      this.$store.dispatch("login", {
        loginForm: this.loginForm,
        router: this.$router,
      });
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
  created() {
    this.$store.dispatch("getInfo");
  },
};
</script>
<style scoped>
.div{
  background-color: pink;
  width: 50%;
  height: 30%;
}
</style>
