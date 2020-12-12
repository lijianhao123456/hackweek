<template>
  <el-dropdown @command="handleCommand" class="dropdown">
    <span class="el-dropdown-link">
      <van-icon name="wap-nav" color="#FF9E9A" size="0.6rem" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item disabled>我的评价</el-dropdown-item>
      <el-dropdown-item disabled>设置</el-dropdown-item>
      <el-dropdown-item command="change">修改密码</el-dropdown-item>
      <el-dropdown-item command="edit">编辑资料</el-dropdown-item>
      <el-dropdown-item command="about">关于我们</el-dropdown-item>
      <el-dropdown-item command="exit">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "dropdown",
  methods: {
    exit: function () {
      sessionStorage.clear();
      this.$router.push("/login");
    },
    about: function () {
      this.$router.push("/About");
    },
    edit: function () {
      this.$router.push("/edit");
    },
    change: function () {
      this.$router.push("/changePwd");
    },
    handleCommand(cmditem) {
      switch (cmditem) {
        case "about":
          this.about();
          break;
        case "exit":
          this.exit();
          break;
        case "edit":
          this.edit();
          break;
        case "change":
          this.change();
          break;
      }
    },
  },
};
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.dropdown {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
}
.el-dropdown-menu {
  background-color: #ffe7e7;
}
.el-dropdown-menu__item {
  color: #ff9e9a;
}
</style>
