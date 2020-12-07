<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">时装</el-menu-item>
      <el-menu-item index="2">正装</el-menu-item>
      <!-- <el-submenu index="2"> -->
        <!-- <template slot="title">正装</template> -->
        <!-- <el-menu-item index="2-1">选项1</el-menu-item> -->
        <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
        <!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
        <!-- <el-submenu index="2-4"> -->
          <!-- <template slot="title">选项4</template> -->
          <!-- <el-menu-item index="2-4-1">选项1</el-menu-item> -->
          <!-- <el-menu-item index="2-4-2">选项2</el-menu-item> -->
          <!-- <el-menu-item index="2-4-3">选项3</el-menu-item> -->
        <!-- </el-submenu> -->
      <!-- </el-submenu> -->
      <el-menu-item index="3" >理发</el-menu-item>
      <el-menu-item index="4" >美甲</el-menu-item>
      <el-menu-item index="5" >修眉</el-menu-item>
      <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:'Sort',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-menu{
  text-align: center;
  padding: 0 center;
  display: flex;
  justify-content: space-around;
}
</style>