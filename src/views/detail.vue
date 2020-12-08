<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <div style="position: relative">
      <van-nav-bar
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      >
        <template #right>
          <i class="el-icon-share" @click="share" style="font-size: 30px"></i>
        </template>
      </van-nav-bar>
    </div>
    <div>
      <div class="Mine-categories-swipe">
        <van-swipe class="my-swipe" :autoplay="9999999999">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div>
      <div>
        <van-image
          round
          fit="fill"
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <van-share-sheet
      v-model="showShare"
      description="某李姓前端好菜啊"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "../components/test.vue";
import Vue from "vue";
import { NavBar } from "vant";
import { Image as VanImage } from "vant";
import { ShareSheet } from "vant";
import { Toast } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(ShareSheet);
Vue.use(VanImage);
Vue.use(NavBar);

export default {
  name: "Home",
  components: {
    Test,
  },
  methods: {
    exit: function () {
      sessionStorage.clear();
      this.$router.push("login");
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    share() {
      console.log(1);
      this.showShare = true;
    },
    onSelect(option) {
      Toast({
        message: "不许分享！",
        icon: "smile",
      });
      this.showShare = false;
    },
  },
  data() {
    return {
      registerForm: {
        username: "qwer", //接上数据
        password: "123",
      },
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.Mine-categories-swipe img {
  display: inline-block;
  width: 100%;
  height: 200px;
}
</style>
