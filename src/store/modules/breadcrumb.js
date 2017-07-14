export default {
  namespaced: true,
  state: {
    topNavActive: '0',
    sidebarNavActive: '0'
  },
  getters: {
    topNavActive (state) {
      return state.topNavActive
    },
    sidebarNavActive (state) {
      return state.sidebarNavActive
    }
  },
  mutations: {
    topNavActive (state, value) {
      state.topNavActive = value
    },
    sidebarNavActive (state, value) {
      state.sidebarNavActive = value
    }
  },
  actions: {
    topNavActive ({commit}, value) {
      commit('topNavActive', value)
    },
    sidebarNavActive ({commit}, value) {
      commit('sidebarNavActive', value)
    }
  }
}
