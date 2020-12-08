<template>
  <div>
    <Search />
    <Head />
    <Recom />
    <Testtab />
    <div style="font-size: 40px">李健豪好菜啊</div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
    <navigation />
  </div>
</template>
    
  <script>
import End from "../components/End.vue";
import Head from "../components/Head.vue";
import Search from "../components/Search.vue";
import Recom from "../components/Recom.vue";
import Testtab from "../components/testtab.vue";
import Navigation from "../components/navigation";

export default {
  name: "Home",
  components: {
    Head,
    Search,
    Recom,
    Testtab,
    Navigation,
  },
  created() {
    this.$store.dispatch("getInfo", 0);
    this.$store.dispatch("getInfo", 1);
    this.$store.dispatch("getInfo", 2);
    this.$store.dispatch("getInfo", 3);
    this.$store.dispatch("getInfo", 4);
  },
};
</script>