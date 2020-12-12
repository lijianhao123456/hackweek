<template>
  <div>
    <Search />
    <Head />
    <Swipe />
    <tab />
    <navigation />
  </div>
</template>
    
  <script>
import Head from "../components/Head.vue";
import Search from "../components/Search.vue";
import tab from "../components/tab";
import Navigation from "../components/navigation";
import Swipe from '../components/swipe.vue';

export default {
  name: "Home",
  components: {
    Head,
    Search,
    Swipe,
    tab,
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