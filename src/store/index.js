/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality
import { actions, getters, mutations, state } from './posts'

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store
