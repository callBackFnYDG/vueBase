import * as types from '../mutation-types'
const state = {
  loginType: null
}

const getters = {
  loginType: state => {
    return state.loginType
  }
}

const mutations = {
  [types.SET_LOGIN_TYPE](state, loginType) {
    state.loginType = loginType
  }
}

const actions = {
  setLoginType({
    commit
  }, loginType) {
    commit(types.SET_LOGIN_TYPE, loginType)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
