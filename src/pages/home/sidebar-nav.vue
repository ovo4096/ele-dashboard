<template>
  <el-menu default-active="1-1" class="ele-rounded-0" @select="handleSelect">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>导航一</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">欢迎</el-menu-item>
        <el-menu-item index="1-2">demo</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        switch (key) {
          case '1-1':
            this.$router.push({ name: 'home-index' })
            break
          case '1-2':
            this.$router.push({ name: 'home-demo' })
            break
          default:
            break
        }
      }
    }
  }
</script>
