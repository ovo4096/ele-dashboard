import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Login from '@/pages/login'

import HomeIndex from '@/pages/home/index'
import HomeSidebarNav from '@/pages/home/sidebar-nav'
import HomeWelcome from '@/pages/home/welcome'
import HomeDemo from '@/pages/home/demo'

import SettingsIndex from '@/pages/settings/index'
import SettingsSidebarNav from '@/pages/settings/sidebar-nav'
import SettingsDemo from '@/pages/settings/demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Index,
      children: [
        {
          path: 'home',
          alias: '',
          components: {
            default: HomeIndex,
            sidebarNav: HomeSidebarNav
          },
          children: [
            {
              name: 'home-index',
              path: 'welcome',
              alias: '',
              component: HomeWelcome
            },
            {
              name: 'home-demo',
              path: 'demo',
              component: HomeDemo
            }
          ]
        },
        {
          path: 'settings',
          components: {
            default: SettingsIndex,
            sidebarNav: SettingsSidebarNav
          },
          children: [
            {
              name: 'settings-index',
              path: 'demo',
              alias: '',
              component: SettingsDemo
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
