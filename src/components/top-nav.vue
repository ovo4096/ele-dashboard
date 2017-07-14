<template>
  <el-menu theme="dark" :default-active="active" mode="horizontal" class="ele-rounded-0" @select="handleSelect">
    <template v-for="(nav, index) in navMap">
      <el-menu-item :index="index.toString()"><i v-if="nav.icon" :class="nav.icon"></i>{{ nav.text }}</el-menu-item>
    </template>
    <slot></slot>
  </el-menu>
</template>

<script>
  export default {
    props: ['navMap'],
    methods: {
      handleSelect (index) {
        switch (index) {
          case 'user-logout': {
            this.$store.dispatch('authentication/accessToken', '')
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
      active: {
        get () {
          return this.$store.getters['breadcrumb/topNavActive']
        }
      }
    }
  }
</script>
