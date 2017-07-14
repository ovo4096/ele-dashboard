<template>
  <ele-layout>
    <ele-top-nav slot="top-nav" :nav-map="navMap">
      <ele-user-menu></ele-user-menu>
    </ele-top-nav>
    <template slot="sidebar-nav">
      <transition name="el-fade-in" mode="out-in">
        <router-view name="sidebarNav"></router-view>
      </transition>
    </template>
    <transition name="el-fade-in" mode="out-in">
      <router-view></router-view>
    </transition>
  </ele-layout>
</template>

<script>
  import Layout from '@/components/layout'
  import TopNav from '@/components/top-nav'
  import UserMenu from '@/components/user-menu'

  import navMap from '@/config/navMap'

  export default {
    components: {
      'ele-layout': Layout,
      'ele-top-nav': TopNav,
      'ele-user-menu': UserMenu
    },
    data () {
      return {
        navMap
      }
    }
  }
</script>
