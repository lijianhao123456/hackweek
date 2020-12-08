<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">地图</van-tabbar-item>
    <van-tabbar-item icon="add" badge=""></van-tabbar-item>
    <van-tabbar-item replace to="/message" icon="chat-o" dot
      >消息</van-tabbar-item
    >
    <van-tabbar-item replace to="/me" icon="setting-o">我</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  name: "navigation",
  data() {
    return {
      active: 0,
    };
  },
};
</script>
