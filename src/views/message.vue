<template>
  <div>
    <van-nav-bar title="消息" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell icon="friends-o" size="30" title="粉丝" is-link  label="李健豪 关注了你"/>
    <navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";
import Vue from "vue";
import { NavBar } from "vant";
import { Cell, CellGroup } from "vant";
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
export default {
  name: "message",
  components: {
    navigation,
  },
  methods: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
  },
};
</script>
<style scoped></style>
