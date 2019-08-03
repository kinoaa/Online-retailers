import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isShowNav: true
  },
  mutations: {
    showNav (state) {
      state.isShowNav = true
    },
    hideNav (state) {
      state.isShowNav = false
    }
  }
})

export default store
