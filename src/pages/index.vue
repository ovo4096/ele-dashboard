<template>
  <ele-dashboard-layout>
    <ele-main-nav slot="main-nav"></ele-main-nav>
    <template slot="sidebar-nav">
      <transition name="el-fade-in" mode="out-in">
        <router-view name="sidebarNav"></router-view>
      </transition>
    </template>
    <transition name="el-zoom-in-top" mode="out-in">
      <router-view></router-view>
    </transition>
  </ele-dashboard-layout>
</template>

<script>
  import DashboardLayout from '@/components/dashboard-layout'
  import MainNav from '@/pages/main-nav'

  export default {
    components: {
      'ele-dashboard-layout': DashboardLayout,
      'ele-main-nav': MainNav
    }
  }
</script>
