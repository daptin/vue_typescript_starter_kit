import Vue from 'vue'
import Vuex, {ActionTree, MutationTree} from 'vuex'
import * as T from '../types/common'
import {DaptinClient} from 'daptin-client'

Vue.use(Vuex);


export interface Todo {
  title: String,
  completed: Boolean
  created_at: Date,
  updated_at: Date,
}

const daptinClient = new DaptinClient("http://localhost:6336", false);
daptinClient.worldManager.loadModels().then(function () {
  daptinClient.jsonApi.findAll("todo").then(function(res: any){
    console.log("all todos", res.data)
  })
});

interface State {
  links: T.Link[],
  todos: Todo[]
}

const mutations: MutationTree<State> = {
  reverse: (state) => state.links.reverse(),
  refreshTodos: (state) => {
    daptinClient.worldManager.loadModel("todo").then(function (response) {

      daptinClient.jsonApi.findAll("todo").then(function (todos: object[]) {
        console.log("todos", todos);
      });

    })
  }
}

const actions: ActionTree<State, any> = {}

const state: State = {
  links: [
    {url: "https://vuejs.org", description: "Core Docs"},
  ] as T.Link[],
  todos: [] as Todo[],
}

export default new Vuex.Store<State>({
  state,
  mutations,
  actions
});



