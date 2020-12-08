<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <van-icon name="wap-nav" size="30" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item disabled>我的评价</el-dropdown-item>
      <el-dropdown-item disabled>设置</el-dropdown-item>
      <el-dropdown-item command="about">关于我们</el-dropdown-item>
      <el-dropdown-item command= "exit">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  methods: {
    exit: function () {
      sessionStorage.clear();
      this.$router.push("/login");
    },
    about: function () {
      this.$router.push("/About");
    },
    handleCommand(cmditem) {
      switch (cmditem) {
        case "about":
          this.about();
          break;
        case "exit":
          this.exit();
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
</style>