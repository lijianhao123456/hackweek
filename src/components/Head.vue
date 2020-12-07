<template>
    <van-tabs v-model="active">
        <van-tab title="关注"></van-tab>
        <van-tab title="发现"></van-tab>
        <!-- <van-icon name="search" size="40"/> -->
        <!-- <van-tab icon="search"> -->
        <!-- </van-tab> -->
        
        <!-- <div> -->
          <!-- <van-tabbar v-model="active"> -->
            <!-- <van-tabbar-item icon="search" dot>ye</van-tabbar-item> -->
          <!-- </van-tabbar> -->
        <!-- </div> -->
    </van-tabs>
</template>

<script>
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    import { Icon } from 'vant';
    
    Vue.use(Tab);
    Vue.use(Tabs);
    Vue.use(Icon);

    export default {
        name:'Head',
        data() {
          return {
            active: 2,
          };
        },
    };
</script>
<style scoped>
.van-icon{
  float: right;
}
</style>