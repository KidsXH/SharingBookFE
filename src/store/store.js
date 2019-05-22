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
    searchText: null,
    bookList: [],
    tagList: [],
    categoryList: [],
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
    [types.CHANGE_BOOK_LIST] (state, { list }) {
      state.bookList = list;
    },
    [types.CHANGE_TAG_LIST] (state, { list }) {
      state.tagList = list;
    },
    [types.CHANGE_CATEGORY_LIST] (state, { list }) {
      state.categoryList = list;
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
    searchBooks({commit}, params) {
      api.getBooks(params).then(
        res => {
          alert(res.status);
          commit(types.CHANGE_BOOK_LIST, { list: res.data })
        },
        err => {
          alert(err)
        }
      );
    },
    getAllTags({commit}) {
      api.getTags().then(
        res => {
          commit(types.CHANGE_TAG_LIST, { list: res.data.results })
        },
        err => {
          alert(err)
        }
      );
    },
    getAllCategories({commit}) {
      api.getCategories().then(
        res => {
          commit(types.CHANGE_CATEGORY_LIST, { list: res.data.results })
        },
        err => {
          alert(err)
        }
      );
    },
  }
})
