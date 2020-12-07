<template>
    <div>
      <Search/>
      <Head/>
      <Recom/>
      <Sort/>
      <Card/>
      <End/>
    </div>
  </template>
    
  <script>
  import Sort from '../components/Sort.vue';
  import End from '../components/End.vue';
  import Head from '../components/Head.vue';
  import Search from '../components/Search.vue';
  import Recom from '../components/Recom.vue';
  import Card from '../components/Card.vue';
  
  export default {
    name: "Home",
    components:{
      Sort,
      End,
      Head,
      Search,
      Recom,
      Card,
    }
  };
  </script>