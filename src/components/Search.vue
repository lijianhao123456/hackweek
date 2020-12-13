<template>
  <van-search
    v-model="value"
    shape="round"
    @focus="Search"
    placeholder="请输入搜索关键词（暂时只能搜标题"
    background="#FF9E9A"
  >
  </van-search>
  <!-- <van-icon name="search" size="40" /> -->
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
// import { Icon } from 'vant';

Vue.use(Search);
// Vue.use(Icon);

export default {
  name: "Search",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    Search() {
      this.$router.push("/searchPage");
    },
  },
};
</script>
