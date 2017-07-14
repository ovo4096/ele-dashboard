const state = {
  accessToken: ''
}

const getters = {
  accessToken (state) {
    return state.accessToken
  }
}

const mutations = {
  accessToken (state, value) {
    state.accessToken = value
  }
}

const actions = {
  accessToken ({commit}, value) {
    commit('accessToken', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
