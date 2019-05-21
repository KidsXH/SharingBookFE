import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookDetailDialog: false,
  },
  mutations: {
    showBookDetail: state => state.bookDetailDialog = true,
    hideBookDetail: state => state.bookDetailDialog = false,
    updateBookDetailDialog: (state, value) => state.bookDetailDialog = value,
  },
  actions: {

  }
})
