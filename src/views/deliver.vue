<template>
  <div>
    <van-nav-bar left-arrow title="发布" @click-left="onClickLeft" />
    <div class="Body">
      <div class="box">
        <div class="img">
          <van-image width="160px" height="160px" fit="cover" :src="qianduan" />
          <div class="photograph">
            <van-uploader
              v-model="fileList"
              multiple
              max-count="1"
              preview-size="160px"
              :after-read="afterRead"
            />
          </div>
        </div>
        <div class="sort">
          <p style="font-size: 15px; color: #ffffff; text-indent: 33px">发 布 分 类</p>
          <div class="list">
            <p style="font-size: 15px; color: #ff9e9a; text-indent: 20px">
              {{ active }}
            </p>
            <el-dropdown @command="handleCommand" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu>
                <el-dropdown-item command="0">时装</el-dropdown-item>
                <el-dropdown-item command="1">正装</el-dropdown-item>
                <el-dropdown-item command="2">理发</el-dropdown-item>
                <el-dropdown-item command="3">美甲</el-dropdown-item>
                <el-dropdown-item command="4">修眉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="content_box">
          <div class="content">
            <div class="pswd-limit">
              <span>{{ info.length }}</span
              >/150
            </div>
            <div class="title">
              <input maxlength="18" v-model="title" type="text" placeholder="标题" />
              <p style="font-size: 15px">————————</p>
            </div>
            <div class="detail">
              <textarea
                v-model="info"
                maxlength="150"
                placeholder="请描述你的分享..."
              ></textarea>
            </div>
            <div @click="onSubmit" class="button">
              <span class="btn">发布</span>
            </div>
            <van-overlay :show="show" @click="show = false">
              <div class="wrapper">
                <div class="block">
                  <div class="tip">
                    <p style="font-size: 15px">返回将会删除您编辑的所有内容…</p>
                  </div>
                  <div class="Button">
                    <button
                      @click="confirm"
                      class="opt"
                      style="background-color: #92a0ff"
                    >
                      <p>确认</p>
                    </button>
                    <button class="opt" style="background-color: #ff9e9a">
                      <p>取消</p>
                    </button>
                  </div>
                </div>
              </div>
            </van-overlay>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import qianduan from "@/assets/qianduan.jpg";
import axios from "axios";
import { Image as VanImage, Icon, Uploader, Overlay } from "vant";

Vue.use(Overlay);
Vue.use(Uploader);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(VanImage);
export default {
  name: "Post",
  components: {},
  data() {
    return {
      active: "时装",
      fileList: [],
      file: {},
      title: "",
      info: "",
      cate: "",
      qianduan: qianduan,
      show: false,
    };
  },
  methods: {
    onClickLeft() {
      if (this.fileList.length = 0 || this.title != "" || this.info != "") {
        this.show = true;
      } else {
        this.$router.push("home");
      }
    },
    select0: function () {
      this.active = "时装";
      this.cate = "0";
    },
    select1: function () {
      this.active = "正装";
      this.cate = "1";
    },
    select2: function () {
      this.active = "理发";
      this.cate = "2";
    },
    select3: function () {
      this.active = "美甲";
      this.cate = "3";
    },
    select4: function () {
      this.active = "美妆";
      this.cate = "4";
    },
    handleCommand(cmditem) {
      switch (cmditem) {
        case "0":
          this.select0();
          break;
        case "1":
          this.select1();
          break;
        case "2":
          this.select2();
          break;
        case "3":
          this.select3();
          break;
        case "4":
          this.select4();
          break;
      }
    },
    onSubmit() {
      this.show = true;
      // this.$store.dispatch("deliver", {
      //   file: this.file,
      //   cate: this.cate,
      //   title: this.title,
      //   info: this.info,
      //   router: this.$router,
      // });
    },
    confirm() {
      this.$router.push("/home");
    },
    cancel() {
      this.show = false;
    },
    afterRead(file) {
      console.log(file);
      // let data = new FormData();
      // data.append("picture", file.file);
      // axios
      //   .post("http://47.103.200.147:8080/upload", data, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then((res) => {
      //     if (res.data.statusCode == 200) {
      //     }
      //   });
    },
  },
};
</script>

<style scoped>
.Body {
  position: absolute;
  width: 100%;
  height: 100%;
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
.button {
  width: 2rem;
  height: 0.8rem;
  background-color: #ff9e9a;
  border-radius: 0.3rem;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.15);
  margin: 0.3rem auto;
  font-size: 0.3rem;
  color: #ffffff;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 0.8rem;
}
.btn {
  margin-left: 0.1rem;
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
  margin: 25px 0px 20px 13px;
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
  display: flex;
  flex-direction: column;
  position: relative;
}
.title {
  width: 105px;
  height: 30px;
  color: #ff9e9a;
  display: flex;
  flex-direction: column;
}
.detail {
  width: 100%;
  height: 90%;
  margin-top: 10px;
  color: #ff9e9a;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ff9e9a;
}
.el-dropdown {
  font-size: 33px;
}
.el-dropdown-menu {
  background-color: #ffe7e7;
}
.el-dropdown-menu__item {
  color: #ff9e9a;
}
textarea {
  width: 100%;
  height: 95%;
  margin-top: 10px;
  color: #ff9e9a;
  font-size: 15px;
  line-height: 180%;
  border: none;
}
::placeholder {
  color: #ff9e9a;
}
input {
  border: none;
  width: 100%;
  height: 20px;
  font-size: 20px;
}
.van-uploader__preview {
  margin: 0;
}
.pswd-limit {
  position: absolute;
  bottom: 1rem;
  right: 0;
  font-size: 16px;
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
.Button {
  height: 250px;
  width: 224px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
button{
  border: none;
}

.opt {
  color: #ffffff;
  width: 75px;
  height: 40px;
  border-radius: 15px;
  font-size: 15px;
}
</style>
