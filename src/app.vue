<template>
  <ele-dashboard-layout></ele-dashboard-layout>
</template>

<script>
  import DashboardLayout from '@/components/dashboard-layout'

  export default {
    name: 'app',
    components: {
      'ele-dashboard-layout': DashboardLayout
    }
  }
</script>
