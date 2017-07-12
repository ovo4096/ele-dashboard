<template>
  <div>
    <el-row>
      <el-col :span="24" class="ele-header-layout">
        <slot name="main-nav"></slot>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="10" :sm="8" :md="6" :lg="4" class="ele-nav-bar-layout">
        <slot name="sidebar-nav"></slot>
      </el-col>
      <el-col :xs="14" :sm="16" :md="18" :lg="20" class="ele-content-layout">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
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
