<template>
  <ele-sidebar-nav :nav-map="navMap"></ele-sidebar-nav>
</template>

<script>
  import sidebarNav from '@/components/dashboard-sidebar-nav'
  import sidebarNavArgumentsMixin from '@/mixins/dashboard-sidebar-nav-arguments'

  export default {
    mixins: [sidebarNavArgumentsMixin],
    components: {
      'ele-sidebar-nav': sidebarNav
    }
  }
</script>
