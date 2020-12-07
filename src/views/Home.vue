<template>
  <div>
    <Search />
    <Head />
    <Recom />
    <Testtab />
    <div style="font-size: 40px">李健豪好菜啊</div>
    <navigation />
  </div>
</template>
    
  <script>
import End from "../components/End.vue";
import Head from "../components/Head.vue";
import Search from "../components/Search.vue";
import Recom from "../components/Recom.vue";
import Testtab from "../components/testtab.vue";
import Navigation from "../components/navigation.vue";

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