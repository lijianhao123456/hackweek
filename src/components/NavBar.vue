<template>
  <van-nav-bar
  left-arrow
  title="粉丝"
  @click-left="onClickLeft"
/>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);

export default {
  name: "NavBar",
  data() {
    return {
      value: "",
    };
  },
  methods:{
    onClickLeft(){
      this.$router.back(-1)
    }
  }
};
</script>