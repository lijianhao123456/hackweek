<template>
  <div class="Body">
    <div style="position: relative; z-index: 2">
      <!-- <div class="arrow">
        <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
      </div> -->
      <dropdown />
    </div>
    <div class="user">
      <div style="width:100%;height:100%" @click="sorry">
      </div>
      <div class="img_box">
        <van-uploader v-model="fileList" :max-count="1">
          <van-image round width="1.2rem" height="1.2rem" :src=url />
          <!-- <input type="file" accept="image/*" class="van-uploader__input"> -->
        </van-uploader>
        <h1 style="font-size: 20px;font-weight:bold">小家园</h1>
      </div>
      <div class="tabbox_1">
        <p>获赞0</p>
        <p @click="goToFollower2">关注9</p>
        <p @click="goToFollowers">粉丝9</p>
      </div>
    </div>
    <information />
    <navigation />
  </div>
</template>

<script>
import information from "../components/information.vue";
import dropdown from "../components/dropdown";
import avatar from "@/assets/image/avatar.png";
import Vue from "vue";
import { Image as VanImage } from "vant";
import Navigation from "../components/navigation.vue";
import { Toast } from "vant";
import { Uploader } from "vant";

Vue.use(Uploader);
Vue.use(Toast);
Vue.use(VanImage);
export default {
  name: "Me",
  components: {
    dropdown,
    information,
    Navigation,
  },
  methods: {
    onClickLeft() {
      this.$router.push("home");
    },
    goToFollowers() {
      this.$router.push("followers");
    },
    sorry() {
      Toast({
        message: "不许上传背景图！",
        icon: "smile",
      });
    },
    goToFollower2(){
      this.$router.push("follower2");      
    }
  },
  data() {
    return {
      fileList:[],
      url: avatar,
    };
  },
  watch:{
    
  }
};
</script>

<style scoped>
.Body {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: white;
  color: #ff9e9a;
}
.user {
  position: relative;
  width: 100%;
  height: 4rem;
  background-color: grey;
  background-image: url(../assets/mybg.png);
  background-size: cover;
}
.img_box {
  position: absolute;
  left: 0.7rem;
  bottom: 0.2rem;
}
.tabbox_1 {
  width: 60%;
  height: 25px;
  color: #ff9e9a;
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  font-size: 0.3rem;
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.arrow {
  position: absolute;
  top: -0.1rem;
  left: 0.2rem;
  z-index: 3;
}

</style>
