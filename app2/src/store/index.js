import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    msg:'app2'
  },
  mutations: {
    setMsg(state,payload){
      state.msg=payload
    }
  },
  actions: {

  },
  modules: {
  }
})

export default store
