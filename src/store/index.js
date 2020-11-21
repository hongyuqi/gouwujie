import { createStore } from 'vuex'
import Vue from 'vue'
import Vuex from 'vuex'
import {DECREMENT, INCREMENT, INCREMENTCOUNT} from "./mutation-types";

// Vue.use(Vuex)

export default createStore({
  state: {
    counter:0,
  },
  mutations: {
    [INCREMENT](state){
      state.counter++
    },
    [DECREMENT](state){
      state.counter--
    },
    [INCREMENTCOUNT](state,payload){
      console.log(payload.count)
      state.counter+=payload.count
    },
  },
  actions: {
  },
  modules: {
  }
})
