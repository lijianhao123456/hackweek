<template>
  <van-tabs @click="onClick" background="#ffcad4" swipeable>
    <van-tab :title="'时装 '">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in info" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab :title="'正装 '">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in info" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab :title="'理发 '">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in info" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab :title="'美甲 '">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in info" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab :title="'修眉 '">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in info" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
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
import { Toast } from "vant";

Vue.use(PullRefresh);

Vue.use(Icon);
Vue.use(Toast);

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
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onClick(name, title) {
      console.log(name);
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