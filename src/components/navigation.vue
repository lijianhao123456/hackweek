<template>
    <van-tabbar
      v-model="active"
      z-index="5"
      active-color="#ff6e6e"
      inactive-color="#FFFFFF"
      route
      placeholder
    >
      <van-tabbar-item
        replace
        to="/home"
        icon="http://hellosun.net.cn/hackweek/Group 1.svg"
        >首页</van-tabbar-item
      >
      <van-tabbar-item @click="sorry" icon="search">地图</van-tabbar-item>
      <van-tabbar-item icon="add" style="font-size: 30px"></van-tabbar-item>
      <van-tabbar-item replace to="/message" icon="chat-o" dot>消息</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="setting-o">我</van-tabbar-item>
    </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  name: "navigation",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    sorry: function () {
      Toast({
        message: "没有地图…",
        icon: "smile",
      });
    },
  },
};
</script>

<style scoped>
</style>
