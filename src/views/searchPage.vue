<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      @change="Search"
      placeholder="请输入搜索关键词"
    >
    </van-search>
    <div class="container">
      <div v-for="value in info" class="card" @click="goToDetail">
        <van-image class="image" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <div class="brief">
          <div class="owner">
            <van-icon class="like" name="like-o" />
            {{ value.owner }}
          </div>
          <div class="info">{{ value.info }}</div>
          <div class="likes">
            <van-icon class="like" name="like-o" />
            <div>{{ value.likes }}</div>
          </div>
        </div>
      </div>

      <van-empty
        v-if="seen"
        image="search"
        description="某李姓前端太菜了，啥也搜不出来"
      />
    </div>
    <van-divider v-if="seen1">没有更多了呜呜呜……</van-divider>
  </div>
</template>
<script>
import Vue from "vue";
import { Empty } from "vant";
import { Search } from "vant";
import { Tab, Tabs } from "vant";
import { Icon } from "vant";
import { PullRefresh } from "vant";
import { Toast } from "vant";
import { Image as VanImage } from "vant";
import { Loading } from "vant";
import { Divider } from "vant";

Vue.use(Divider);
Vue.use(Loading);
Vue.use(VanImage);
Vue.use(PullRefresh);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Search);
Vue.use(Empty);
export default {
  name: "searchPage",
  data() {
    return {
      value: "",
      seen: true,
      seen1: false,
    };
  },
  methods: {
    Search() {
      this.$store.dispatch("search", { info: this.value });
    },
    goToDetail() {
      this.$router.push("detail");
    },
  },
  computed: {
    info() {
      return this.$store.state.search;
    },
  },
  watch: {
    info(val) {
      if (val.length == 0 || val == null) {
        this.seen = true;
        this.seen1 = false;
      } else {
        this.seen = false;
        this.seen1 = true;
      }
    },
  },
};
</script>
<style scoped>
.card {
  width: 3.5rem;
  height: 5.2rem;
  background-color: #f5e0e0;
  margin: 0 0.05rem 0.2rem;
  border-radius: 5px;
}
.container {
  margin: 0 auto;
  width: 7.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image {
  width: 3.5rem;
  height: 3.9rem;
}
.brief {
  background-color: #f5e0e0;
  color: #f3a4a5;
  font-weight: bold;
  width: 3.5rem;
  height: 1.4rem;
  z-index: 2;
  position: relative;
  font-size: 0.2rem;
  top: -0.2rem;
  border-radius: 0.1rem;
}
.owner {
  position: absolute;
  left: 0.1rem;
  bottom: 0.1rem;
}
.info {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.likes {
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
}
/* .shadow{
    box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 1);
} */
</style>
