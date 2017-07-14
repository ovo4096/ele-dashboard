import Vue from 'vue'
import Vuex from 'vuex'

import breadcrumb from './modules/breadcrumb'
import authentication from './modules/authentication'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    breadcrumb,
    authentication
  },
  strict: debug
})
