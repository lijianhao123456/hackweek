<template>
  <van-nav-bar title="标题" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);

Vue.use(NavBar);
export default {
   name: 'login',
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>
<style scoped>

</style>