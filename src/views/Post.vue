<template>
  <div class="Body">
    <div class="box">
      <div class="back_box">
        <back />
      </div>
      <div class="img">
        <van-image
          width="160px"
          height="160px"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="photograph">
          <!-- <van-icon name="photograph" color="#FF9E9A" size="33px"/> -->
          <!-- <van-uploader :after-read="afterRead" /> -->
          <!-- <van-uploader v-model="fileList" multiple max-count="1" preview-size="160px" /> -->
        </div>
      </div>
      <div class="sort">
        <p
          style="
            font-size: 15px;
            color: #ffffff;
            font-family: HYZhengYuan;
            text-indent: 33px;
          "
        >
          发 布 分 类
        </p>
        <div class="list">
          <p
            style="
              font-size: 15px;
              color: #ff9e9a;
              font-family: HYZhengYuan;
              text-indent: 20px;
            "
          >
            时装
          </p>
          <Dropdown />
        </div>
      </div>
      <div class="content_box">
        <div class="content">
          <div class="title">
            <input type="text" placeholder="标题" />
            <!-- <p style="font-size: 15px;">标题</p> -->
            <p style="font-size: 15px">————————</p>
          </div>
          <div class="detail">
            <!-- <p style="font-size: 10px;">请描述你的分享...</p> -->
            <textarea maxlength="150" placeholder="请描述你的分享..."></textarea>
          </div>
        </div>
      </div>
      <div @click="deliver" class="button_box">
        <button target="_blank"><h3>发 布</h3></button>
      </div>
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper">
          <div class="block">
            <div class="tip">
              <p style="font-size: 15px">返回将会删除您编辑的所有内容…</p>
            </div>
            <div class="Button">
              <button target="_blank" class="opt" style="background-color:#92a0ff;"><p>确认</p></button>
              <button target="_blank" class="opt" style="background-color: #ff9e9a;"><p>取消</p></button>
            </div>
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
import Dropdown from "../llq/components/Dropdown.vue";
// import Overlay from "../components/Overlay.vue";
import back from "../llq/components/back.vue";
import Vue from "vue";
import { Image as VanImage, Icon, Uploader, Overlay } from "vant";

Vue.use(Overlay);
Vue.use(Uploader);
Vue.use(Icon);
Vue.use(VanImage);

export default {
  name: "Post",
  components: {
    back,
    Dropdown,
    // Overlay,
  },
  methods: {
    deliver() {
      this.show = true;
    },
  },
  data() {
    return {
      fileList: [],
      show: false,
    };
  },
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
  background-color: #f5e0e0;
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back_box {
  width: 100%;
  height: 46px;
  background-color: #ff9e9a;
}

.back {
  color: #ffffff;
}

.img {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photograph {
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px #b9b8b8;
  margin: 20px 0px 20px 13px;
  background-color: #ffffff;
}

.van-uploader {
  width: 100%;
  height: 100%;
  display: flex;
}

.sort {
  width: 335px;
  height: 40px;
  border-radius: 15px;
  background-color: #ff9e9a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0.5px 2px 3px 0.7px #aca9a9;
}

.list {
  width: 210px;
  height: 40px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0.5px 2px 3px 0.7px #aca9a9;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content_box {
  width: 335px;
  height: 50%;
  background-color: #ffffff;
  color: #ff9e9a;
  margin-top: 20px;
  box-shadow: 0.5px 2px 3px 0.7px #aca9a9;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 88%;
  height: 92%;
  /* background-color: violet; */
  display: flex;
  flex-direction: column;
}

.title {
  width: 80%;
  height: 30px;
  color: #ff9e9a;
  display: flex;
  flex-direction: column;
}

.detail {
  /* background-color: darkgreen; */
  width: 100%;
  height: 90%;
}

textarea {
  /* background-color: rgb(227, 238, 130); */
  width: 100%;
  height: 95%;
  margin-top: 10px;
  color: #ff9e9a;
  font-size: 15px;
  line-height: 180%;
}

input {
  border: none;
  width: 100%;
  height: 20px;
  font-size: 20px;
}

::placeholder {
  color: #ff9e9a;
}

.button_box {
  margin-top: 8px;
  width: 335px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  border-color: #f872a6;
  color: #ff9e9a;
  padding: 2% 10%;
  width: 145px;
  height: 40px;
  border-radius: 10px;
  font-size: medium;
}
button:hover {
  background-color: #ff9e9a;
  color: #fcfcfc;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 335px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  color: #ff9e9a;
}
.tip {
  width: 224px;
  height: 20px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}
.Button{
  height: 250px;
  width: 224px;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
.opt{
  color:#ffffff;
  width:75px;
  height: 40px;
  border-radius: 15px;
  font-size:15px;
}
</style>
