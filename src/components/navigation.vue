<template>
  <van-tabbar
    v-model="active"
    z-index="5"
    active-color="#ff6e6e"
    inactive-color="#FFFFFF"
    route
    placeholder
  >
    <van-tabbar-item replace to="/home" :icon="home"
      >首页</van-tabbar-item
    >
    <van-tabbar-item @click="sorry" :icon="map">地图</van-tabbar-item>
    <van-tabbar-item icon="add" replace to="/deliver"></van-tabbar-item>
    <van-tabbar-item replace to="/message" :icon="message" dot>消息</van-tabbar-item>
    <van-tabbar-item replace to="/me" :icon="me">我</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import { Toast } from "vant";
import map from "@/assets/image/icon/map.png";
import add from "@/assets/image/icon/add.png";
import message from "@/assets/image/icon/message.png";
import me from "@/assets/image/icon/me.png";
import home from "@/assets/image/icon/home.png";
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  name: "navigation",
  data() {
    return {
      active: 0,
      map:map,
      add:add,
      message:message,
      me:me,
      home:home
    };
  },
  methods: {
    sorry: function () {
      Toast({
        message: "没有地图…",
        icon: "smile",
      });
    },
    deliver: function () {
      this.$router.push("deliver")
    },
  },
};
</script>

<style scoped></style>
