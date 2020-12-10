<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <div style="position: relative">
      <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft">
        <template #right>
          <i class="el-icon-share" @click="share" style="font-size: 25px;color:#ffffff"></i>
        </template>
      </van-nav-bar>
    </div>
    <div class="user">
      <div class="owner">
        <van-image
          round
          fit="fill"
          width="0.5rem"
          height="0.5rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="ownerName"> 李健豪 </span>
      </div>
      <div class="likes">
        <div class="button" @click="sorry">
          <span class="btn">关注</span>
        </div>
      </div>
    </div>
    <div class="Mine-categories-swipe">
      <van-swipe class="my-swipe" :autoplay="9999999999">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="container">
      <div class="description">本店新到</div>
      <div>
      </div>
    </div>
    <div class="num">
      <span>共40条评论</span>
    </div>
    <div class="comment">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多假评论了…"
        @load="onLoad"
      >
        <van-cell
          icon="location-o"
          v-for="item in list"
          :key="item"
          title="李健豪"
          value="好好看！"
        />
      </van-list>
      <div style="height: 0.9rem"></div>
    </div>
    <div class="add">
      <van-search
        v-model="value"
        shape="round"
        placeholder="说点什么…"
        left-icon="edit"
        @search="search"
        show-action
      >
        <template #action>
          <van-icon
            class="like"
            size="0.3rem"
            name="http://hellosun.net.cn/hackweek/good.svg"
          />
        </template>
      </van-search>
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
import { Search } from "vant";
import { Icon } from "vant";
import { List } from "vant";
import { Cell, CellGroup } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
Vue.use(Icon);
Vue.use(Search);
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
      this.$router.push("Home")
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
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    search() {
      Toast({
        message: "不许评论！",
        icon: "smile",
      });
    },
    sorry() {
      Toast({
        message: "不许关注！",
        icon: "smile",
      });
    },
  },
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
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
  width: 100%;
  height: 200px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.Mine-categories-swipe img {
  display: inline-block;
  width: 100%;
  height: 200px;
}
.container {
  position: relative;
  height: 3.5rem;
  width: 100%;
}
.owner {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0.5rem;
  bottom: 0.3rem;
  font-size: 0.3rem;
}
.ownerName {
  margin-left: 0.2rem;
  color: #ff9e9a;
}
.button {
  width: 1rem;
  height: 0.48rem;
  background-color: #ffe7e7;
  border-radius: 0.3rem;
  box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 0.2rem;
  color: #ff9e9a;
  letter-spacing: 0.05rem;
  text-align: center;
  line-height: 0.48rem;
}
.description {
  position: absolute;
  top: 0.6rem;
  left: 0.4rem;
  font-size: 0.4rem;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid;
  border-color: #ff9e9a;
}
.likes {
  font-size: 0.5rem;
  position: absolute;
  right: 0.3rem;
  bottom: 0.3rem;
}
.num {
  height: 0.6rem;
  font-size: 16px;
  background-color: yellow;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
}
.comment {
  width: 100%;
  height: 1rem;
  height: 1rem;
}
.add {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  bottom: 0.3rem;
}
.input {
  width: 80%;
}
.user {
  position: relative;
  width: 100%;
  height: 1rem;
}
</style>
