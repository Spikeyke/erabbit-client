import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
    username: 'zs'
  },
  getters: {
    newName(state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName(state) {
      state.username = 'ls'
    }
  },
  actions: {
    updateName(ctx) {
      //发请求
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  modules: {}
})
