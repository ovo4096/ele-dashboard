<template>
  <div>
    <el-row>
      <el-col :span="24" class="ele-header-layout">
        <el-menu theme="dark" default-active="1" mode="horizontal" class="ele-no-border">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="10" :sm="8" :md="6" :lg="4" class="ele-nav-bar-layout">
        <el-menu default-active="2" class="ele-no-border">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
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
      </el-col>
      <el-col :xs="14" :sm="16" :md="18" :lg="20" class="ele-content-layout">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .ele-no-border {
    border-radius: 0;
  }

  .ele-nav-bar-layout {
    position: fixed;
    top: 60px;
    bottom: 0;
    overflow: auto;
    background: rgb(238, 241, 246);
  }

  .ele-header-layout {
    position: fixed;
    top: 0;
    z-index: 1;
  }

  .ele-content-layout {
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    overflow: auto;
    border-left: 1px solid #dfe6ec;
  }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {}
  }
</script>
