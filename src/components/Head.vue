<template>
  <van-tabs
    background="#FF9E9A"
    line-width="0.6rem"
    line-height="0.1rem"
    color="#FF6E6E"
    title-active-color="#FFFFFF"
    style="margin-top: -1px"
    v-model="active"
  >
    <van-tab title="关注" to="/follow"></van-tab>
    <van-tab title="发现" to="/home"></van-tab>
  </van-tabs>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Icon } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);

export default {
  name: "Head",
  data() {
    return {
      active: 1,
    };
  },
};
</script>
<style scoped>
.van-icon {
  float: right;
}
</style>
