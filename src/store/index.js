import Vue from 'vue'
import Vuex from 'vuex'

import dashboard from './modules/dashboard'
import authentication from './modules/authentication'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    dashboard,
    authentication
  },
  strict: debug
})
