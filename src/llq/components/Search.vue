<template>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- <van-icon name="search" size="40" /> -->
</template>

<script>
    import Vue from 'vue';
    import { Search } from 'vant';
    // import { Icon } from 'vant';

    Vue.use(Search);
    // Vue.use(Icon);


    export default {
        name:'Search',
        data() {
          return {
            value: '',
          };
        },
    };      
</script>