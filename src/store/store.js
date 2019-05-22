import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/axios'
import types from './types'

Vue.use(Vuex);

const userMutations = {
  [types.CHANGE_PROFILE](state, {profile}) {
    state.profile = profile
  },
  [types.CHANGE_MODAL_STATUS](state, {mode, visible}) {
    if (mode !== undefined) {
      state.modalStatus.mode = mode
    }
    if (visible !== undefined) {
      state.modalStatus.visible = visible
    }
  }
};

const userActions = {
  getProfile({commit}) {
    api.getProfile().then(
      res => {
        commit(types.CHANGE_PROFILE, {
          profile: res.data
        })
      },
      () => {
        commit(types.CHANGE_PROFILE, {
          profile: {}
        })
      }
    )
  },
  clearProfile({commit}) {
    commit(types.CHANGE_PROFILE, {
      profile: {}
    })
  }
};

export default new Vuex.Store({
  state: {
    modalStatus: {
      mode: 'login', // ['login', 'register', 'bookDetail', 'authorDetail', 'profile']
      visible: false
    },
    profile: {},
    searchText: '',
  },
  getters: {
    isAuth: state => {
      return !!state.profile.id
    }
  },
  mutations: {
    ...userMutations,
    [types.CHANGE_SEARCH_TEXT] (state, { text }) {
      state.searchText = text
    },
  },
  actions: {
    ...userActions,
    changeModalStatus({commit}, payload) {
      commit(types.CHANGE_MODAL_STATUS, payload)
    },
    changeSearchText({commit}, payload) {
      commit(types.CHANGE_SEARCH_TEXT, payload)
    },
  }
})
