export default {
  namespaced: true,
  state: {
    current: '',
    next: '',
    history: []
  },
  mutations: {
    current (state, value) {
      state.next = state.current
      state.current = value
    }
  },
  actions: {
    current ({ commit }, value) {
      commit('current', value)
    }
  }
}
