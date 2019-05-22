import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalStatus: {
      mode: 'login', // ['login', 'register', 'bookDetail', 'authorDetail', 'profile']
      visible: false
    },
    isAuth: false,
  },
  mutations: {
    [types.CHANGE_MODAL_STATUS] (state, {mode, visible}) {
      if (mode !== undefined) {
        state.modalStatus.mode = mode
      }
      if (visible !== undefined) {
        state.modalStatus.visible = visible
      }
    }
  },
  actions: {
    changeModalStatus({commit}, payload) {
      commit(types.CHANGE_MODAL_STATUS, payload)
    },
  }
})
