<template>
  <el-menu default-active="1" class="ele-rounded-0" @select="handleSelect">
    <el-menu-item index="1"><i class="el-icon-menu"></i>Demo</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        switch (key) {
          case '1':
            this.$router.push({ name: 'settings-demo' })
            break
          default:
            break
        }
      }
    }
  }
</script>
