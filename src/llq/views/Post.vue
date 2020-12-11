<template>
  <div>
    <van-nav-bar left-arrow title="发布" @click-left="onClickLeft" />
    <div class="Body">
      <div class="box">
        <div class="img">
          <van-image
            width="160px"
            height="160px"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="photograph">
            <van-icon name="photograph" color="#FF9E9A" size="33px" />
          </div>
        </div>
        <div class="sort">
          <p style="font-size: 15px; color: #ffffff; text-indent: 33px">发 布 分 类</p>
          <div class="list">
            <p style="font-size: 15px; color: #ff9e9a; text-indent: 20px">
              {{ active }}
            </p>
            <el-dropdown  @command="handleCommand" trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu>
                <el-dropdown-item command="1">时装</el-dropdown-item>
                <el-dropdown-item command="2">正装</el-dropdown-item>
                <el-dropdown-item command="3">理发</el-dropdown-item>
                <el-dropdown-item command="4">美甲</el-dropdown-item>
                <el-dropdown-item command="5">修眉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="content_box">
          <div class="content">
            <div class="title">
              <p style="font-size: 15px">标题</p>
              <p>————————</p>
            </div>
            <div class="detail">
              <p style="font-size: 10px">请描述你的分享...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";
import { NavBar } from "vant";

Vue.use(NavBar);
Vue.use(Icon);
Vue.use(VanImage);

export default {
  name: "Post",
  components: {
    Dropdown,
  },
  data() {
    return {
      active: "时装",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("home");
    },
    select1: function () {
      this.active = "时装";
    },
    select2: function () {
      this.active = "正装";
    },
    select3: function () {
      this.active = "理发";
    },
    select4: function () {
      this.active = "美甲";
    },
    select5: function () {
      this.active = "美妆";
    },
    handleCommand(cmditem) {
      switch (cmditem) {
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
        case "5":
          this.select5();
          break;
      }
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
  width: 105px;
  height: 30px;
  color: #ff9e9a;
  display: flex;
  flex-direction: column;
}
.detail {
  /* background-color: rgb(227, 238, 130); */
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
.el-dropdown-menu{
  background-color: #FFE7E7;

}
.el-dropdown-menu__item{
  color:#FF9E9A;
}
</style>
