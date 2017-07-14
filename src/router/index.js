import Vue from 'vue'
import Router from 'vue-router'

import navMap from '@/config/navMap'

import Content from '@/components/content'
import SidebarNav from '@/components/sidebar-nav'

import Dashboard from '@/pages/dashboard'
import Login from '@/pages/login'

import HomeWelcome from '@/pages/home/welcome'
import HomeDemo from '@/pages/home/demo'

import SettingsDemo from '@/pages/settings/demo'
import SettingsDemo2 from '@/pages/settings/demo2'

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
            sidebarNav: SidebarNav
          },
          props: {
            sidebarNav: {
              navMap: navMap[0].children,
              isKey: false
            }
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
            sidebarNav: SidebarNav
          },
          props: {
            sidebarNav: {
              navMap: navMap[1].children,
              isKey: false
            }
          },
          children: [
            {
              path: 'demo',
              alias: '',
              name: 'settings-demo',
              component: SettingsDemo
            },
            {
              path: 'demo2',
              name: 'settings-demo2',
              component: SettingsDemo2
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
