<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <div class="container">
      <div class="arrow" @click="onClickLeft">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="image">
        <van-image
          round
          fit="fill"
          width="2rem"
          height="2rem"
          :src="avatar"
        />
      </div>
    </div>
    <div class="divider" style="margin-top:1.5rem">
      <span> 个人信息 </span>
    </div>
    <div class="form">
      <van-form @submit="onSubmit" validate-trigger="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          input-align="right"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          readonly
          clickable
          name="picker"
          :value="gender"
          label="性别"
          input-align="right"
          placeholder="点击选择性别"
          :rules="[{ required: true, message: '请选择性别' }]"
          @click="showGenderPicker = true"
        />
        <van-popup v-model="showGenderPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="genderConfirm"
            @cancel="showGenderPicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="date"
          label="生日"
          input-align="right"
          placeholder="/年/月/日"
          :rules="[{ required: true, message: '请选择出生日期' }]"
          @click="showDatePicker = true"
        />
        <van-popup v-model="showDatePicker" position="bottom">
          <van-datetime-picker
            type="date"
            title="选择年月日"
            @confirm="dateConfirm"
            @cancel="showDatePicker = false"
            :min-date="minDate"
            :max-date="currentDate"
          />
        </van-popup>
        <van-field
          v-model="password"
          name="密码"
          label="所在地"
          placeholder="请输入所在地"
          input-align="right"
          :rules="[{ required: true, message: '请填写所在地' }]"
        />
        <div class="divider">
          <span> 简介 </span>
        </div>
        <van-field
          v-model="message"
          autosize
          type="textarea"
          maxlength="30"
          placeholder="写下你想说的话叭~"
          show-word-limit
        />
        <div class="divider1">
          <div @click="onSubmit" class="button">
            <span class="btn">确认</span>
          </div>
        </div>
      </van-form>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block">
          <span class="change"> 更改失败！ </span>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Image as VanImage } from "vant";
import { Form } from "vant";
import { Picker } from "vant";
import { Field } from "vant";
import { Button } from "vant";
import { Search } from "vant";
import { Popup } from "vant";
import { DatetimePicker } from "vant";
import { Icon } from "vant";
import { Uploader } from "vant";
import { Overlay } from "vant";
import { Toast } from "vant";
import avatar from "@/assets/image/avatar.png";
Vue.use(Toast);
Vue.use(Overlay);
Vue.use(Uploader);
Vue.use(Icon);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Button);
Vue.use(Field);
Vue.use(Picker);
Vue.use(Form);
Vue.use(VanImage);
Vue.use(NavBar);

export default {
  name: "edit",
  components: {},
  methods: {
    onClickLeft() {
      this.$router.push("me");
    },
    genderConfirm(value) {
      this.gender = value;
      this.showGenderPicker = false;
    },
    dateConfirm(time) {
      Toast({
        message: "出现未知错误！",
        icon: "smile",
      });
    },
    onSubmit() {
      this.show = true;
    },
  },
  data() {
    return {
      show: false,
      fileList: [],
      username: "",
      password: "",
      value: "",
      columns: ["男", "女", "李健豪"],
      showDatePicker: false,
      showGenderPicker: false,
      gender: "",
      date: "",
      minDate: new Date(2000, 0, 1),
      defaultDate: new Date(2002, 6, 2),
      currentDate: new Date(),
      message: "",
      avatar:avatar
    };
  },
};
</script>
<style scoped>
.container {
  /* display: flex;
  justify-content: center; */
  position: relative;
  /* z-index: 2; */
  height: 3.6rem;
  background-image: url(../assets/xiaojiayuan.png);
  background-size: cover;
  width: 100vw;
  margin-bottom: 0.7rem;
}
.wrapper {
  display: flex;
  position: relative;
  justify-content: center;
  height: 100%;
}
.block {
  position: absolute;
  top: 29%;
  width: 2.9rem;
  height: 0.8rem;
  border-radius: 0.3rem;
  background-color: #fff;
  margin: 0.3rem auto;
  font-size: 0.3rem;
  color: #ff9e9a;
  letter-spacing: 0.05rem;
  text-align: center;
  line-height: 0.8rem;
}
.image {
  position: absolute;
  top: 2.5rem;
  left: 50%;
  margin-left: -1.05rem;
  border-radius: 50%;
  border: 0.04rem solid;
  border-color: #ff9e9a;
  width: 2rem;
  height: 2rem;
}

.form-group {
  margin-bottom: 0.4rem;
}
.divider {
  font-size: 16px;
  border-top: 0.04rem solid;
  border-bottom: 0.04rem solid;
  border-color: #ff9e9a;
  padding: 0.15rem 0.3rem;
  color: #ff9e9a;
  font-weight: bold;
}
.button {
  width: 1.5rem;
  height: 0.8rem;
  background-color: #92a0ff;
  border-radius: 0.3rem;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.15);
  margin: 0.3rem auto;
  font-size: 0.3rem;
  color: #ffffff;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 0.8rem;
}
.change {
  margin-left: 0.1rem;
}
.btn {
  margin-left: 0.1rem;
}
.divider1 {
  border-top: 0.04rem solid;
  border-color: #ff9e9a;
}
.arrow {
  position: fixed;
  top: 0.2rem;
  left: 0.2rem;
  z-index: 1;
  color: #ffffff;
  font-size: 0.6rem;
}
.change {
  font-size: 16px;
}
</style>
