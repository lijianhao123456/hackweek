<template>
  <van-tabs
    background="#FFE7E7"
    title-active-color="#FF9E9A"
    title-inactive-color="#FF9E9A"
    color="#FF9E9A"
    line-width="50%"
    v-model="active"
  >
    <van-tab title="动态">
      <div class="container">
        <div @click="goToDeliver" class="button">
          <span  class="btn">快来发布第一条动态叭~</span>
        </div>
      </div>
    </van-tab>
    <van-tab title="赞过">
      <div class="container">
        <div class="button">
          <span class="btn">您暂时没有赞过的内容哦~</span>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: "information",
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    goToDeliver:function(){
      this.$router.push("deliver")
    }
  }
};
</script>

<style scoped>
.button {
  width: 4.1rem;
  height: 0.6rem;
  background-color: #ffe7e7;
  border-radius: 0.3rem;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.15);
  margin: 2.91rem auto;
  font-size: 0.2rem;
  color: #ff9e9a;
  text-align: center;
  line-height: 0.6rem;
}
.btn {
  margin-left: 0.1rem;
}
</style>
