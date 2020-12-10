<template>
  <div class="Body">
    <div style="position: relative; z-index: 2">
      <div class="arrow">
        <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
      </div>
      <Test />
    </div>
    <div class="user">
      <div class="img_box">
        <van-image
          round
          width="1.2rem"
          height="1.2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <h1 style="font-size: 20px">小山女</h1>
      </div>
      <div class="tabbox_1">
        <p>获赞0</p>
        <p>关注0</p>
        <p>粉丝9</p>
      </div>
    </div>
    <information />
    <navigation />
  </div>
</template>

<script>
import information from "../components/information.vue";
import Test from "../components/test.vue";
import Vue from "vue";
import { Image as VanImage } from "vant";
import Navigation from "../components/navigation.vue";

Vue.use(VanImage);
export default {
  name: "Me",
  components: {
    Test,
    information,
    Navigation,
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
  },
  data() {
    return {};
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
  background-color: white;
  color: #ff9e9a;
}
.user {
  position: relative;
  width: 100%;
  height: 4rem;
  background-color: grey;
  background-image: url(../assets/mybg.png);
}
.img_box {
  position: absolute;
  left: 0.7rem;
  bottom: 0.2rem;
}
.tabbox_1 {
  width: 60%;
  height: 25px;
  color: #ff9e9a;
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  font-size: 0.3rem;
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.arrow {
  position: absolute;
  top: -0.1rem;
  left: 0.2rem;
  z-index: 3;
}
</style>
