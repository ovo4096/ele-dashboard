<template>
  <el-menu theme="dark" default-active="1" mode="horizontal" class="ele-rounded-0" @select="handleSelect">
    <el-menu-item index="1">主页</el-menu-item>
    <el-menu-item index="2">Demo</el-menu-item>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">外链1</a></el-menu-item>
    <slot></slot>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        switch (key) {
          case '1':
            this.$router.push({name: 'home-welcome'})
            break
          case '2':
            this.$router.push({name: 'settings-demo'})
            break
          default:
            break
        }
      }
    }
  }
</script>
