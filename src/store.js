import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const CHANGE_MODAL_STATUS = 'CHANGE_MODAL_STATUS';

export default new Vuex.Store({
  state: {
    modalStatus: {
      mode: 'login', // ['login', 'register', 'bookDetail', 'authorDetail', 'userProfile']
      visible: false
    },
    isAuth: false,
  },
  mutations: {
    [CHANGE_MODAL_STATUS] (state, {mode, visible}) {
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
      commit(CHANGE_MODAL_STATUS, payload)
    },
  }
})
