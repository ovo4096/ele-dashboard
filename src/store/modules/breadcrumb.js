const state = {
  topNavActive: '0',
  sidebarNavActive: '0'
}

const getters = {
  topNavActive (state) {
    return state.topNavActive
  },
  sidebarNavActive (state) {
    return state.sidebarNavActive
  }
}

const mutations = {
  topNavActive (state, value) {
    state.topNavActive = value
  },
  sidebarNavActive (state, value) {
    state.sidebarNavActive = value
  }
}

const actions = {
  topNavActive ({commit}, value) {
    commit('topNavActive', value)
  },
  sidebarNavActive ({commit}, value) {
    commit('sidebarNavActive', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
