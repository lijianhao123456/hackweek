<template>
  <van-nav-bar
  left-arrow
  title="关注"
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

<style scoped>
.van-nav-bar{
  background-color: #FF9E9A;
  color: white;
}
</style>