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
          <p style="font-size: 15px">
            <strong> 手机号：</strong
            ><input type="text" name="phonenumber" placeholder="请输入手机号" />
          </p>
          <br />
        </div>
        <div class="Input">
          <p style="font-size: 15px">
            <strong>设置密码：</strong
            ><input type="password" name="password" placeholder="请输入密码" />
          </p>
          <br />
        </div>
        <div class="Input">
          <p style="font-size: 15px">
            <strong>确认密码：</strong
            ><input type="password" name="password" placeholder="请确认密码" />
          </p>
          <br />
        </div>
      </div>
      <div class="Button_box">
        <p style="font-size: 10px"><Checkbox /></p>
        <br />
        <button target="_blank"><h3>注 册</h3></button>
      </div>
    </div>
  </div>
</template>

<script>
import back from "../components/back.vue";
import Checkbox from "../components/Checkbox.vue";
import Vue from "vue";
import { Image as VanImage } from "vant";

Vue.use(VanImage);

export default {
  name: "Register",
  components: {
    back,
    Checkbox,
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
  background-image: url("../assets/iPhone 6-7-8 – LoginBg04.jpg");
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
  color: rgb(206, 131, 143);
  font-family: arial, Hiragino Sans GB, Microsoft Yahei;
  width: 300px;
  padding: 1% 2%;
  margin: 3% auto 5%;
  height: 55%;
  font-size-adjust: inherit;
}
.Input_box {
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
}
.Input {
  display: flex;
  align-self: center;
  width: 100%;
  height: 45px;
}
input {
  border: none;
  border-bottom: 1px solid rgb(165, 90, 102);
  width: 60%;
}
.Button_box {
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
button {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #fcfcfc;
  border-color: #f872a6;
  color: #f78db6;
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
