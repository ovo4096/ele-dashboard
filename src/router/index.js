import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/pages/dashboard'
import Login from '@/pages/login'

import Content from '@/components/content'

import HomeSidebarNav from '@/pages/home/sidebar-nav'
import HomeWelcome from '@/pages/home/welcome'
import HomeDemo from '@/pages/home/demo'

import SettingsSidebarNav from '@/pages/settings/sidebar-nav'
import SettingsDemo from '@/pages/settings/demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Dashboard,
      children: [
        {
          path: '',
          alias: '',
          components: {
            default: Content,
            sidebarNav: HomeSidebarNav
          },
          children: [
            {
              path: 'welcome',
              alias: '',
              name: 'home-welcome',
              component: HomeWelcome
            },
            {
              path: 'demo',
              name: 'home-demo',
              component: HomeDemo
            }
          ]
        },
        {
          path: 'settings',
          components: {
            default: Content,
            sidebarNav: SettingsSidebarNav
          },
          children: [
            {
              path: 'demo',
              alias: '',
              name: 'settings-demo',
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
