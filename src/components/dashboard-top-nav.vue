<template>
  <el-menu theme="dark" default-active="1" mode="horizontal" class="ele-rounded-0" @select="handleSelect">
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">Demo</el-menu-item>
    <el-submenu index="3">
      <template slot="title">主导航二</template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">外链1</a></el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        switch (key) {
          case '1':
            this.$router.push({ name: 'home-welcome' })
            break
          case '2':
            this.$router.push({ name: 'settings-demo' })
            break
          default:
            break
        }
      }
    }
  }
</script>
