<template>
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>时装</el-dropdown-item>
          <el-dropdown-item>正装</el-dropdown-item>
          <el-dropdown-item>理发</el-dropdown-item>
          <el-dropdown-item>美甲</el-dropdown-item>
          <el-dropdown-item>修眉</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
</template>

<script>

</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #FF9E9A;
}
.el-icon-arrow-down {
    font-size: 30px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
.el-icon{
    height: 40px;
    width: 40px;
}
.el-dropdown{
    font-size: 33px;
}
</style>