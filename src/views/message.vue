<template>
  <div>
    <van-nav-bar title="消息" left-arrow @click-left="onClickLeft" />
    <van-cell
      icon="friends-o"
      @click="goToFollowers"
      title="粉丝"
      is-link
      label="李健豪 关注了你"
    />
    <van-notice-bar scrollable text="肝不动了…" />
    <div @click="sorry">
    <van-cell
      icon="chat-o"
      title="来自陌生人的消息"
      is-link
      label="这个世界充满了对我的压迫 我浑身冰凉"
    />
    <van-cell
      icon="chat-o"
      title="来自陌生人的消息"
      is-link
      label="推进度最快的方式是砍需求"
    />
    <van-cell icon="chat-o" title="来自陌生人的消息" is-link label="晚安，打工人" />
    <van-cell icon="chat-o" title="来自陌生人的消息" is-link label="早安，打工人" />
    <van-cell icon="chat-o" title="来自陌生人的消息" is-link label="你好，组件库人" />
    </div>
    <navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";
import Vue from "vue";
import { NavBar } from "vant";
import { Cell, CellGroup } from "vant";
import { Icon } from "vant";
import { NoticeBar } from "vant";
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(NoticeBar);
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
      this.$router.push("/Home")
    },
    goToFollowers() {
      this.$$router.push("/followers");
    },
    sorry() {
      Toast({
        message: "肝不动了",
        icon: "close",
      });
    },
  },
};
</script>
<style scoped></style>
