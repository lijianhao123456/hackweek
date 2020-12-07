<template>
  <van-tabs @click="onClick" @change="changeName" background="#ffcad4" animated swipeable lazy-render>
    <van-tab title="时装">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information0" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="正装">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information1" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="理发">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information2" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="美甲">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information3" class="card">
            <div>{{ value.owner }}</div>
            <div>{{ value.info }}</div>
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="修眉">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information4" class="card">
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
      current:"0"
    };
  },
  computed: {
    information0() {
      // 获取store里的数据，放在computed中可以实时更新
      return this.$store.state.information0;
    },
    information1() {
      return this.$store.state.information1;
    },
    information2() {
      return this.$store.state.information2;
    },
    information3() {
      return this.$store.state.information3;
    },
    information4() {
      return this.$store.state.information4;
    },
  },

  methods: {
    onRefresh() {
      this.$store.dispatch("getInfo", this.current);
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onClick(name, title) {
      this.$store.dispatch("getInfo", name);
    },
    changeName(name){
      console.log(name);
      this.current=name
    }
  },
};
</script>
<style scoped>
.card {
  width: 3rem;
  height: 5rem;
  background-color: pink;
  margin: 0.07rem;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>