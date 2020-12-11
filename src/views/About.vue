<template>
  <div class="Body">
    <div style="position: relative; z-index: 2">
      <div class="arrow">
        <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
      </div>
    </div>
    <div class="box">
      <div class="title">
        <p style="font-size: 20px; color: white">关 于 我 们</p>
      </div>
      <div class="content_box">
        <div class="content">
          <p style="font-size: 15px; color: #8d8b8b">
            阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴
          </p>
        </div>
      </div>
      <div class="version">
        <p style="color: #ff9e9a; font-size: 15px">南窗1.0</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);

export default {
  name: "About",
  components: {},
  methods: {
    onClickLeft() {
      this.$router.push("me");
    },
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
  background-image: url("../assets/about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.arrow {
  position: absolute;
  top: -0.1rem;
  left: 0.2rem;
  z-index: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 45px;
  height: 60px;
}
.box {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: tomato; */
}
.title {
  margin-top: 60px;
  background-color: #ff9e9a;
  width: 195px;
  height: 43px;
  border-radius: 13px 13px 0 0;
  box-shadow: 2px 2px 5px 2px #dbdada;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_box {
  width: 275px;
  height: 77%;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px #dbdada;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 88%;
  height: 92%;
  /* background-color: violet; */
  display: flex;
}
.version {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
