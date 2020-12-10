<template>
  <div class="Body">
    <back />
    <div class="img_box">
      <div class="img">
        <van-image
          round
          width="90px"
          height="90px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <div class="Login">
      <div class="Input_box">
        <div class="Input">
          <label for="">手机号：</label>
          <input  id=""type="text" name="phonenumber" placeholder="请输入手机号" />
        </div>
        <div class="Input">
          <div style="width: 0.8rem">密 码：</div>
          <input type="password" name="password" placeholder="请输入密码" />
        </div>
      </div>
      <p style="color: #92a0ff">
        <a style="float: left" href="">用户注册</a>
        <a style="float: right" href="">忘记密码?</a>
      </p>
      <br />
      <div class="Button_box">
        <button target="_blank"><h3>登 录</h3></button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
Vue.use(Icon);

import back from "../components/back.vue";
export default {
  name: "login",
  components: {
    back,
  },
};
</script>

<style scoped>
.Body {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-image: url("../assets/iPhone 6-7-8 – LoginBg02.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.img_box {
  height: 22%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.img {
  border-style: solid;
  border-radius: 50%;
  border-color: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100px;
  height: 100px;
}
.Login {
  border-style: solid;
  border-color: transparent;
  background-color: rgb(236, 186, 194, 0.3);
  border-radius: 8px;
  color: #ff8686;
  width: 300px;
  padding: 1% 2%;
  margin: 3% auto 5%;
  height: 55%;
  font-size-adjust: inherit;
}
.Input_box {
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Input {
  display: flex;
  align-self: center;
  width: 90%;
  height: 40px;
  font-size: 15px;
}
input {
  border: none;
  border-bottom: 1px solid #ff8686;
  background-color: transparent;
}
.Button_box {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
button {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  border-color: #f872a6;
  color: #ff8686;
  padding: 2% 10%;
  width: 45%;
  border-radius: 10px;
  float: left;
  font-size: medium;
}
button:hover {
  background-color: #f78db6;
  color: #fcfcfc;
}
</style>
