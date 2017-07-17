<template>
  <div>
    <el-row>
      <!--header-->
      <el-col :span="24" class="ele-header-layout">
        <el-menu theme="dark" :default-active="topNavActive" mode="horizontal" class="ele-rounded-0"
                 @select="handleTopNavSelect">
          <!--top nav-->
          <template v-for="(nav, index) in navMap">
            <el-menu-item :index="index.toString()"><i v-if="nav.icon" :class="nav.icon"></i>{{ nav.text }}
            </el-menu-item>
          </template>
          <!--user menu-->
          <el-submenu class="ele-user-menu-item" index="user-menu">
            <template slot="title">admin<img src="~@/assets/logo.png" alt="admin"></template>
            <el-menu-item index="user-menu-logout">注销</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <!--sidebar-->
      <el-col :xs="10" :sm="8" :md="6" :lg="4" class="ele-sidebar-layout">
        <slot name="sidebarNav"></slot>
      </el-col>
      <!--content-->
      <el-col :xs="14" :sm="16" :md="18" :lg="20" class="ele-content-layout">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
  /*global styles overwrite*/
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

<style lang="scss" scoped>
  .ele-sidebar-layout {
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
    props: ['navMap'],
    methods: {
      handleTopNavSelect (index) {
        switch (index) {
          case 'user-menu-logout': {
            this.$store.dispatch('authentication/clearAccessToken')
            this.$router.push({name: 'login'})
            break
          }
          default:
            if (this.navMap[index] !== undefined) {
              this.$router.push(this.navMap[index].location)
            }
        }
      }
    },
    computed: {
      topNavActive () {
        return this.$store.getters['dashboard/topNavActive']
      }
    }
  }
</script>
