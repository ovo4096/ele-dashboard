<template>
  <el-menu :default-active="active" class="ele-rounded-0" @select="handleSelect">
    <template v-for="(nav, index) in navMap">
      <el-menu-item :index="index.toString()"><i v-if="nav.icon" :class="nav.icon"></i>{{ nav.text }}</el-menu-item>
    </template>
  </el-menu>
</template>

<script>
  export default {
    props: ['navMap'],
    computed: {
      active: {
        get () {
          return this.$store.getters['dashboard/sidebarNavActive']
        }
      }
    },
    methods: {
      handleSelect (index) {
        if (this.navMap[index] !== undefined) {
          this.$router.push(this.navMap[index].location)
        }
      }
    }
  }
</script>
