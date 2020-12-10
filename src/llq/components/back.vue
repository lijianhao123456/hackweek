<template>
    <van-nav-bar class="back"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import { Toast } from 'vant';

    Vue.use(NavBar);
    Vue.use(Toast);

    export default {
      name:'back',
      methods: {
        onClickLeft() {
          Toast('');
        },
      },
    };
</script>

<style scoped>
.back{
	background-color: transparent;
}
</style>