<template>
  <ele-dashboard-layout>
    <ele-dashboard-top-nav slot="top-nav"></ele-dashboard-top-nav>
    <template slot="sidebar-nav">
      <transition name="el-fade-in" mode="out-in">
        <router-view name="sidebarNav"></router-view>
      </transition>
    </template>
    <transition name="el-fade-in" mode="out-in">
      <router-view></router-view>
    </transition>
  </ele-dashboard-layout>
</template>

<script>
  import DashboardLayout from '@/components/dashboard-layout'
  import DashboardTopNav from '@/components/dashboard-top-nav'

  export default {
    components: {
      'ele-dashboard-layout': DashboardLayout,
      'ele-dashboard-top-nav': DashboardTopNav
    }
  }
</script>
