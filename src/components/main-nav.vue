<template>
  <el-menu theme="dark" default-active="1" mode="horizontal" class="ele-rounded-0">
    <el-menu-item index="1">主导航一</el-menu-item>
    <el-submenu index="2">
      <template slot="title">主导航二</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">外链1</a></el-menu-item>
    <el-menu-item index="4">主导航三</el-menu-item>
  </el-menu>
</template>
