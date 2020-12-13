<template>
  <div @click="goToDetail" class="swipe">
    <van-swipe
      indicator-color="#FF9E9A"
      :loop="false"
      class="my-swipe"
      :autoplay="3000"
      height="170"
    >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
import { Image as VanImage } from "vant";
import img1 from "@/assets/image/swipe/1.jpg";
import img2 from "@/assets/image/swipe/2.jpg";
import img3 from "@/assets/image/swipe/3.jpg";
import img4 from "@/assets/image/swipe/4.jpg";
import img5 from "@/assets/image/swipe/5.jpg";
import img6 from "@/assets/image/swipe/6.png";
Vue.use(VanImage);

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: "swipe",
  data() {
    return {
      images: [img6,img1, img3, img4, img5, img2],
    };
  },
  methods: {
    goToDetail() {
      this.$router.push("detail");
    },
  },
};
</script>

<style scoped>
.swipe img {
  display: inline-block;
  width: 100%;
  height: 170px;
  border-radius: 5px;
}
.swipe {
  width: 335px;
  margin: 5px auto 0;
  border-radius: 5px;
}
</style>
