// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import './styles/theme/index.css'
import './styles/ext/ext.scss'
import App from './app'
import router from './router'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
