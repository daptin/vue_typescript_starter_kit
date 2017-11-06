import Vue from 'vue'
import Vuex from 'vuex'
import { MutationTree, ActionTree } from 'vuex'
import * as T from '../types/common'

Vue.use(Vuex)

interface State {
  links: [T.Link]
}

const mutations: MutationTree<State> = {
  reverse: (state) => state.links.reverse()
}

const actions: ActionTree<State, any> = {
}

const state: State = {
  links: [
    { url: "https://vuejs.org", description: "Core Docs" },
    { url: "https://forum.vuejs.org", description: "Forum" },
    { url: "https://chat.vuejs.org", description: "Community Chat" }
  ]
}

export default new Vuex.Store<State>({
  state,
  mutations,
  actions
});



