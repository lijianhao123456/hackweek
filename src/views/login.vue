<template>
  <div class="visible">
    <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
    <div class="img">
      <div>
        <van-image
          round
          width="1.5rem"
          height="1.5rem"
          :src=avatar
        />
      </div>
    </div>
    <div class="form">
      <div class="formGroup">
        <span> 用户名 </span>
        <input v-model="loginForm.username" maxlength="18" type="text" />
      </div>
      <div class="formGroup">
        <span> 密码 </span>
        <input v-model="loginForm.password" maxlength="18" type="password" />
      </div>
      <div class="register">
        <span @click="goToRegister" style="color: #92a0ff"> 用户注册 </span>
        <span @click="forget"> 忘记密码 </span>
      </div>
      <div class="button" @click="login">
        <span class="btn">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Vue from "vue";
import { Icon } from "vant";
import { Image as VanImage } from "vant";
import { Toast } from "vant";
import avatar from "@/assets/image/avatar.png";
Vue.use(Toast);
Vue.use(VanImage);
Vue.use(Icon);
export default {
  name: "Home",
  methods: {
    // getInfo: function () {
    //   this.$store.dispatch("getInfo");
    // },
    goToRegister: function () {
      this.$router.push("/register");
    },
    login: function () {
      console.log(this.loginForm);
      this.$store.dispatch("login", {
        loginForm: this.loginForm,
        router: this.$router,
      });
    },
    onClickLeft: function () {
      Toast({
        message: "也许是装饰的按钮…",
        icon: "smile",
      });
    },
    forget: function () {
      Toast({
        message: "自求多福！",
        icon: "smile",
      });
    },
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      userToken: "",
      avatar:avatar
    };
  },
};
</script>
<style scoped>
.visible {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/loginbg.png);
  background-size: cover;
}
.form {
  border-color: transparent;
  background-color: rgb(256, 159, 154, 0.2);
  border-radius: 8px;
  color: #ff8686;
  width: 73%;
  padding: 1% 2%;
  margin: auto;
  height: 56%;
  padding: 0.5rem;
  box-sizing: border-box;
}
.img {
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formGroup {
  color: #ff9e9a;
  margin-bottom: 0.6rem;
  font-size: 16px;
  text-align-last: justify;
}
input {
  border: none;
  border-bottom: 1px solid #ff8686;
  background-color: transparent;
  width: 3.2rem;
}
.register {
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  width: 2.9rem;
  height: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.3rem;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.15);
  margin: 1.56rem auto;
  font-size: 0.3rem;
  color: #ff9e9a;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 0.8rem;
}
.btn {
  margin-left: 0.1rem;
}
</style>
