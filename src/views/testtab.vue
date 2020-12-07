<template>
  <van-tabs v-model="active" background="#ffcad4" swipeable>
    <van-tab
      v-for="index in 4"
      :title="'选项 ' + index"
      :key="index"
      class="container"
    >
      <van-pull-refresh style="width=100%" v-model="isLoading" @refresh="onRefresh">

      <div v-for="value in info" class="card">
        <div>{{ value.owner }}</div>
        <div>{{ value.info }}</div>
        <van-icon class="like" name="like-o" />
        <div>{{ value.likes }}</div>
      </div>
            </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Icon } from "vant";
import { PullRefresh } from "vant";

Vue.use(PullRefresh);

Vue.use(Icon);

Vue.use(Tab);
Vue.use(Tabs);

export default {
  data() {
    return {
      isLoading: false,
      info: [
        { owner: "1", info: "李健豪好菜", likes: "20" },
        { owner: "1", info: "李健豪好菜", likes: "20" },
        { owner: "1", info: "李健豪好菜", likes: "20" },
        { owner: "1", info: "李健豪好菜", likes: "20" },
      ],
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.card {
  width: 3rem;
  height: 5rem;
  background-color: pink;
  margin: 0.05rem;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>