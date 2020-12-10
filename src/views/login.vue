<template>
  <div class="visible">
    <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
    <div class="container">
      <div class="form">

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import login from "@/components/login.vue";
import axios from "axios";
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "Home",
  components: {
    login,
  },
  methods: {
    getInfo: function () {
      this.$store.dispatch("getInfo");
    },
    goToAbout: function () {
      this.$router.push("/About");
    },
    login: function () {
      console.log(this.loginForm);
      this.$store.dispatch("login", {
        loginForm: this.loginForm,
        router: this.$router,
      });
    },
  },
  data() {
    return {
      loginForm: {
        username: "lijianhao",
        password: "laji",
      },
      userToken: "",
    };
  },
  computed: {
    incontaineration() {
      // 获取store里的数据，放在computed中可以实时更新
      return this.$store.state.incontaineration;
    },
  },
};
</script>
<style scoped>
.visible {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/loginbg.png);
  overflow-y: auto;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
