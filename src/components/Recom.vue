<template>
  <div class="Mine-categories-swipe">
    <van-swipe
      indicator-color="#FF9E9A"
      :loop="false"
      class="my-swipe"
      :autoplay="3000"
      height="170"
    >
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
import { Image as VanImage } from "vant";

Vue.use(VanImage);

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: "Recom",
  data() {
    return {
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607327823849&di=9b8ef6d93d871f77d69dc7e0fc633084&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180227%2F934b868a0b584c2a900493ac21c99400.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg",
      ],
    };
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  width: 100%;
  height: 170px;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.Mine-categories-swipe img {
  display: inline-block;
  width: 100%;
  height: 170px;
  border-radius: 5px;
}
.Mine-categories-swipe {
  width: 335px;
  margin: 5px auto 0;
  border-radius: 5px;
}
</style>
