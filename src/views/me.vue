<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <div style="position: relative">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
      
      <test />
    </div>
    <div>
      <div>
        <van-image
          round
          fit="fill"
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";
import Test from "../components/test.vue";
import Vue from "vue";
import { NavBar } from "vant";
import { Image as VanImage } from 'vant';

Vue.use(VanImage);
Vue.use(NavBar);

export default {
  name: "Home",
  components: {
    navigation,
    Test,
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1)
    },
  },
  data() {
    return {
      registerForm: {
        username: "qwer", //接上数据
        password: "123",
      },
    };
  },
};
</script>
<style scoped>
</style>
