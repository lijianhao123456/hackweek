<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      @search="Search"
      show-action
      placeholder="请输入搜索关键词(只能搜标题"
      maxlength="20"
      background="#FF9E9B"
    >
      <template #left>
        <van-icon size="0.4rem" color="#ffffff" @click="onClickLeft" name="arrow-left" />
      </template>
      <template #action>
        <van-icon size="0.4rem" color="#ffffff" @click="Search" :name="search" />
      </template>
    </van-search>
    <div class="container">
      <div v-for="value in info" class="card" @click="goToDetail">
        <van-image class="image" radius="5" :src="value.image_url">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <div class="brief">
          <div class="owner">
            <van-image round width="0.4rem" height="0.4rem" :src="value.avatar" />
            {{ value.owner }}
          </div>
          <div class="info">{{ value.tittle }}</div>
          <div class="likes">
            <van-icon @click="like" class="like" size="0.3rem" :name="good" />
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
import search from "@/assets/image/icon/search.png";
import good from "@/assets/image/icon/good.png";
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
      search: search,
      good: good,
    };
  },
  methods: {
    Search() {
      this.$store.dispatch("search", { tittle: this.value });
    },
    goToDetail() {
      this.$router.push("detail");
    },
    onClickLeft() {
      this.$router.push("home");
      this.$store.commit("clearSearch");
    },
    like() {
      Toast({
        message: "不许点赞！",
        icon: "smile",
      });
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
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.15);
}
.container {
  margin: 0.2rem auto;
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
