import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
    usename: 'zs'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
