<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <van-nav-bar left-text="返回" title="编辑资料" left-arrow @click-left="onClickLeft" />
    <div class="container">
      <div class="image">
        <van-image
          round
          fit="fill"
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <div class="form-group">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
        </div>
        <div class="form-group">
          <van-field
            readonly
            clickable
            name="picker"
            :value="gender"
            label="性别"
            placeholder="点击选择性别"
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
        </div>
        <div class="form-group">
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="date"
            label="时间选择"
            placeholder="点击选择时间"
            @click="showDatePicker = true"
          />
          <van-popup v-model="showDatePicker" position="bottom">
            <van-datetime-picker
              v-model="defaultDate"
              type="date"
              title="选择年月日"
              @confirm="dateConfirm"
              @cancel="showDatePicker = false"
              :min-date="minDate"
              :max-date="currentDate"
            />
          </van-popup>
        </div>
        <div class="form-group">
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </div>
        <div class="form-group">
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </div>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </div>
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
      this.$router.back(-1);
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    genderConfirm(value) {
      this.gender = value;
      this.showGenderPicker = false;
    },
    dateConfirm(value) {
      this.date = value;
      this.showdatePicker = false;
    },
  },
  data() {
    return {
      username: "",
      password: "",
      value: "",
      columns: ["男", "女", "李健豪"],
      showDatePicker: false,
      showGenderPicker: false,
      gender: "",
      date: "",
      minDate: new Date(1990, 0, 1),
      defaultDate: new Date(2002, 6, 2),
      currentDate: new Date(),
    };
  },
};
</script>
<style scoped>
.home {
  background-color: pink;
}
.container {
  display: flex;
  justify-content: center;
  position: relative;
}
.image {
  margin-top: 0.2rem;
}
.form {
  margin: auto;
  width: 80%;
}
.form-group {
  margin-bottom: 0.4rem;
}
</style>
