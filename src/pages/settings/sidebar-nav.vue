<template>
  <el-menu default-active="1-1" class="ele-rounded-0">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>导航一</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">demo</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
