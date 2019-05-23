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
    books: {},
    tagList: [],
    categoryList: [],
    bookDetail: {},
    searchParams: {
      searchText: null,
      category: null,
      tags: [],
      sortKey: null,
      sortOrder: null,
    },
  },
  getters: {
    isAuth: state => {
      return !!state.profile.id
    },
    selectedTags: state => state.books.keywords || []
  },
  mutations: {
    ...userMutations,
    [types.CHANGE_SEARCH_PARAMS](state, {searchText, category, tags, sortKey, sortOrder}) {
      if (searchText !== undefined) state.searchParams.searchText = searchText;
      if (category !== undefined) state.searchParams.category = category;
      if (tags !== undefined) state.searchParams.tags = tags;
      if (sortKey !== undefined) state.searchParams.sortKey = sortKey;
      if (sortOrder !== undefined) state.searchParams.sortOrder = sortOrder;
    },
    [types.CHANGE_BOOKS](state, {data}) {
      state.books = data;
    },
    [types.CHANGE_TAG_LIST](state, {list}) {
      state.tagList = list;
    },
    [types.CHANGE_CATEGORY_LIST](state, {list}) {
      state.categoryList = list;
    },
    [types.CHANGE_SELECTED_TAGS](state, {list}) {
      state.selectedTags = list;
    },
    [types.CHANGE_BOOK_DETAIL](state, {data}) {
      state.bookDetail = data
    }
  },
  actions: {
    ...userActions,
    changeModalStatus({commit}, payload) {
      commit(types.CHANGE_MODAL_STATUS, payload)
    },
    changeSearchParams({commit}, payload) {
      commit(types.CHANGE_SEARCH_PARAMS, payload);
    },
    changeBookDetail({commit}, payload) {
      commit(types.CHANGE_BOOK_DETAIL, payload)
    },
    searchBooks({commit, state}) {
      api.getBooks(state.searchParams).then(
        res => {
          commit(types.CHANGE_BOOKS, {data: res.data})
        },
        err => {
          alert(err)
        }
      );
    },
    getAllTags({commit}) {
      api.getTags().then(
        res => {
          commit(types.CHANGE_TAG_LIST, {list: res.data.results})
        },
        err => {
          alert(err)
        }
      );
    },
    getAllCategories({commit}) {
      api.getCategories().then(
        res => {
          commit(types.CHANGE_CATEGORY_LIST, {list: res.data.results})
        },
        err => {
          alert(err)
        }
      );
    },
  }
})
