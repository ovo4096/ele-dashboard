// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import '@/styles/theme/index.css'
import '@/styles/ext/ext.scss'
import App from '@/app'
import router from '@/router'
import store from '@/store'
import navMap from '@/config/navMap'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.getters['authentication/accessToken'] === '') {
    next({ name: 'login' })
    return
  }

  for (let i = 0; i < navMap.length; i++) {
    if (to.name === navMap[i].location.name) {
      store.dispatch('breadcrumb/topNavActive', i.toString())
      store.dispatch('breadcrumb/sidebarNavActive', '0')
      break
    }
    for (let j = 0; navMap[i].children && j < navMap[i].children.length; j++) {
      if (to.name === navMap[i].children[j].location.name) {
        store.dispatch('breadcrumb/topNavActive', i.toString())
        store.dispatch('breadcrumb/sidebarNavActive', j.toString())
        break
      }
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
