<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      @change="Search"
      placeholder="请输入搜索关键词"
    >
    </van-search>
    <van-empty image="search" description="某李姓前端太菜了，啥也搜不出来" />
  </div>
</template>
<script>
import Vue from 'vue';
import { Empty } from 'vant';
import { Search } from 'vant';

Vue.use(Search);
Vue.use(Empty);
export default {
  name: "searchPage",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    Search() {
        console.log(this.value);
      this.$store.dispatch("search",{"search":this.value})
    },
  },
  computed:{
      info(){
          this.$store.state.search
      }
  }
};
</script>
<style scoped>
</style>