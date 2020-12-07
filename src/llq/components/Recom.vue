<!-- <template> -->
  <!-- <el-carousel indicator-position="outside"> -->
    <!-- <el-carousel-item v-for="item in 4" :key="item"> -->
      <!-- <h3>{{ item }}</h3> -->
    <!-- </el-carousel-item> -->
  <!-- </el-carousel> -->
<!-- </template> -->
<!--  -->
<!-- <style scoped> -->
  /* .el-carousel__item h3 { */
    /* color: #475669; */
    /* font-size: 18px; */
    /* opacity: 0.75; */
    /* line-height: 300px; */
    /* margin: 0; */
  /* } */
  /*  */
  /* .el-carousel__item:nth-child(2n) { */
    /* background-color: #99a9bf; */
  /* } */
  /*  */
  /* .el-carousel__item:nth-child(2n+1) { */
    /* background-color: #d3dce6; */
  /* } */
<!-- </style> -->

<template>
  <div class="Mine-categories-swipe">
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';
  import { Lazyload } from 'vant';

  Vue.use(Lazyload);
  Vue.use(Swipe);
  Vue.use(SwipeItem);

  export default {
    name:'Recom',
    data() {
      return {
        images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607327823849&di=9b8ef6d93d871f77d69dc7e0fc633084&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180227%2F934b868a0b584c2a900493ac21c99400.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607327823849&di=20c727d6617ce813c041ca9f685b2c4e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F01%2F20180401125954_BKmWR.jpeg',
        ],
      };
    },
  };
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    width: 100%;
    height: 200px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }
  .Mine-categories-swipe img{
    display: inline-block;
    width: 100%;
    height: 200px;
}
</style>