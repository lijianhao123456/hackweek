<template>
  <div>
    <Search />
    <Head />
    <Recom />
    <Testtab />
    <navigation />
  </div>
</template>
    
  <script>
import Head from "../components/Head.vue";
import Search from "../components/Search.vue";
import Recom from "../components/Recom.vue";
import Testtab from "../components/testtab";
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