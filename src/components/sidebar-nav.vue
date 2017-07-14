<template>
  <el-menu :default-active="active" class="ele-rounded-0" @select="handleSelect">
    <template v-for="(nav, index) in navMap">
      <el-menu-item :index="index.toString()">{{ nav.text }}</el-menu-item>
    </template>
    <!--<el-menu-item index="1"><i class="el-icon-menu"></i>欢迎</el-menu-item>-->
    <!--<el-menu-item index="2"><i class="el-icon-setting"></i>Demo</el-menu-item>-->
  </el-menu>
</template>

<script>
  export default {
    props: ['navMap'],
    mounted () {
      console.log(this.navMap)
    },
    methods: {
      handleSelect (index) {
        if (this.navMap[index] !== undefined) {
          this.$router.push(this.navMap[index].location)
        }
        this.active = index
      }
    },
    computed: {
      active: {
        get () {
          return this.$store.getters['breadcrumb/sidebarNavActive']
        },
        set (value) {
          this.$store.dispatch('breadcrumb/sidebarNavActive', value)
        }
      }
    }
  }
</script>
