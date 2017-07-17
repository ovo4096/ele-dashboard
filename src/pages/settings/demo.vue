<template>
  <div class="ele-content">
    <ele-dashboard-breadcrumb></ele-dashboard-breadcrumb>
    <div class="ele-panel">
      <h1>demo!</h1>
    </div>
  </div>
</template>

<script>
  import DashboardBreadcrumb from '@/components/dashboard-breadcrumb'

  export default {
    components: {
      'ele-dashboard-breadcrumb': DashboardBreadcrumb
    }
  }
</script>
