import Cookies from 'js-cookie'

const accessToken = Cookies.get('accessToken') === undefined ? '' : Cookies.get('accessToken')

const state = {
  accessToken
}

const getters = {
  accessToken (state) {
    return state.accessToken
  }
}

const mutations = {
  accessToken (state, {value, remember = false}) {
    state.accessToken = value
    Cookies.set('accessToken', value, {expires: remember ? 7 : 0})
  }
}

const actions = {
  accessToken ({commit}, {value, remember = false}) {
    commit('accessToken', {value, remember})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
