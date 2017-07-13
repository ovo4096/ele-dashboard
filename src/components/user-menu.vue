<template>
  <el-submenu class="ele-user-menu-item" index="4">
    <template slot="title">Alex<img src="~@/assets/logo.png" alt="薛浩"></template>
    <el-menu-item index="4-1">注销</el-menu-item>
    <el-menu-item index="4-2">设置</el-menu-item>
  </el-submenu>
</template>

<style lang="scss">
  .el-submenu.ele-user-menu-item {
    float: right;
    .el-submenu__title > img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid #97a8be;
      background: #eef1f6;
      vertical-align: middle;
      margin-left: 20px;
    }
    .el-submenu__title > .el-submenu__icon-arrow {
      display: none;
    }
  }
</style>
