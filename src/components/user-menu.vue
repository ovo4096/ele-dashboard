<template>
  <el-submenu class="ele-user-menu-item" index="user-menu">
    <template slot="title">Alex<img src="~@/assets/logo.png" alt="薛浩"></template>
    <el-menu-item index="user-logout">注销</el-menu-item>
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

<script>
  export default {
    methods: {
      handleSelect (index) {
        switch (index) {
          case '1':
            console.log('logout')
            break
        }
      }
    }
  }
</script>
