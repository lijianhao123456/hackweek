<template>
  <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>地图</van-tabbar-item>
      <van-tabbar-item icon="add" badge=""></van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">我</van-tabbar-item>
  </van-tabbar>
</template>
<script>
    import Vue from 'vue';
    import { Tabbar, TabbarItem } from 'vant';

    Vue.use(Tabbar);
    Vue.use(TabbarItem);

    export default {
        name:'End',
        data() {
          return {
            active: 0,
          };
        },
    };
</script>
