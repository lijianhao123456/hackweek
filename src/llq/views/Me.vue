<template>
    <div class="Body">
        <div style="position: relative;z-index:2">
            <div class="arrow">
                <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
            </div>
            <Test/>
        </div>

        <div class="person">
            <div class="img_box">
                <el-avatar :size="60" src="https://empty" @error="errorHandler">
                    <img src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                </el-avatar>
                <h1 style="font-size: 20px;">小仙女</h1>
            </div>
            <div class="tabbox_1">
                <p>获赞</p><p>关注</p><p>粉丝</p>
            </div>
        </div>
        <div>
            <information/>
        </div>
    </div>
    
  </template>

<script>
    import information from '../components/information.vue';
    import Test from '../components/Test.vue';
    import Vue from 'vue';
    import { Icon } from 'vant';
    
    Vue.use(Icon);

    export default {
    name: "Me",
    components: {
        Test,
        information,
    },
    methods: {
        onClickLeft() {
            this.$router.back(-1);
        },
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.Body{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-color: white;
    color: #FF9E9A ;
}
.person{
    width: 100%;
    height: 110px;
    display: flex;
}
.img_box{
    width: 30%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
}
.tabbox_1{
    width: 70%;
    height: 25px;
    color: #FF9E9A;
    display: flex;
    align-self: flex-end;
    justify-content: space-around;
}
.arrow{
    position:absolute;
    top: -0.1rem;
    left: 0.2rem;
    z-index: 3;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    width: 35px;
    height: 45px;
}
</style>
  