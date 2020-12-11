<template>
    <van-tabs v-model="active">
        <van-tab title="动态"></van-tab>
        <van-tab title="赞过"></van-tab>
    </van-tabs>
</template>


<script>
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';

    Vue.use(Tab);
    Vue.use(Tabs);

    export default {
        name:'information',
        data() {
            return {
            active: 2,
            };
        },
    };
</script>

<style scoped>    
van-tabs{
    background-color: #FF9E9A;
    color: #FF9E9A;
}
</style>