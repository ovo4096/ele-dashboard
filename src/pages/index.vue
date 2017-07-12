<template>
  <ele-dashboard-layout>
    <ele-main-nav slot="main-nav"></ele-main-nav>
    <router-view slot="sidebar-nav" name="sidebarNav"></router-view>
    <router-view></router-view>
  </ele-dashboard-layout>
</template>

<script>
  import DashboardLayout from '@/components/dashboard-layout'
  import MainNav from '@/components/main-nav'

  export default {
    components: {
      'ele-dashboard-layout': DashboardLayout,
      'ele-main-nav': MainNav
    }
  }
</script>
