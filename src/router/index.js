import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import HomeIndex from '@/pages/home/index'
import HomeSidebarNav from '@/pages/home/sidebar-nav'
import HomeWelcome from '@/pages/home/welcome'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          components: {
            default: HomeIndex,
            sidebarNav: HomeSidebarNav
          },
          children: [
            {
              path: '/',
              component: HomeWelcome
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
