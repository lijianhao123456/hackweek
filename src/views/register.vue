<template>
  <div class="visible">
    <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
    <div class="img">
      <div>
        <van-image
          round
          width="1.5rem"
          height="1.5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <div class="form">
      <div class="formGroup">
        <span> 账号 </span>
        <div class="pswd-limit">
          <span>{{ registerForm.username.length }}</span
          >/18
        </div>
        <input maxlength="18" v-model="registerForm.username" type="text" />
      </div>
      <div class="formGroup">
        <span> 密码 </span>
        <div class="pswd-limit">
          <span>{{ registerForm.pswd1.length }}</span
          >/18
        </div>
        <input v-model="registerForm.pswd1" maxlength="18" type="password" />
      </div>
      <div class="formGroup">
        <span> 确认 </span>
        <div class="pswd-limit">
          <span>{{ registerForm.pswd2.length }}</span
          >/18
        </div>
        <input v-model="registerForm.pswd2" maxlength="18" type="password" />
      </div>
      <div class="button" @click="register">
        <span class="btn">注册</span>
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
    // login: function () {
    //   console.log(this.registerForm);
    //   this.$store.dispatch("login", {
    //     registerForm: this.registerForm,
    //     router: this.$router,
    //   });
    // },
    onClickLeft: function () {
      this.$router.push("login");
    },
    register: function () {
      if (
        this.registerForm.username === "" ||
        this.registerForm.pswd1 === "" ||
        this.registerForm.pswd2 === ""
      ) {
        Toast({
          message: "账号或密码不能为空",
          icon: "cross",
        });
      } else {
        if (
          this.registerForm.username.length >= 6 &&
          this.registerForm.pswd1.length >= 8 &&
          this.registerForm.pswd2.length >= 8
        ) {
          if (this.registerForm.pswd1 === this.registerForm.pswd2) {
            this.$store.dispatch("register", {
              registerForm: {
                username: this.registerForm.username,
                password: this.registerForm.pswd1,
              },
              router: this.$router,
            });
          } else {
            Toast({
              message: "两次密码输入不一致",
              icon: "cross",
            });
          }
        } else {
          Toast({
            message: "筒子,账号不少于六位,密码不少于八位哦~!",
            icon: "cross",
          });
        }
      }
    },
  },
  data() {
    return {
      registerForm: {
        username: "",
        pswd1: "",
        pswd2: "",
      },
      userToken: "",
    };
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
  position: relative;
}
input {
  border: none;
  border-bottom: 1px solid #ff8686;
  background-color: transparent;
  width: 3.2rem;
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
.pswd-limit {
  position: absolute;
  right: 0px;
}
</style>
