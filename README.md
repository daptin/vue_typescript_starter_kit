# vuejs_typescript_starter_kit

> A Vue.js/Typescript/Vuex/Webpack starter pack  
> I've basically tried to put together the minimum you need to get started   
> Typescript typing works throughout as far as I can tell, including within single-file VUE components  
> Webpack works great both in dev mode (dev server with auto-reload), and in build mode    

# Backend Build Setup

- Edit: schema_modals_daptin.yaml
```
Tables:
  - TableName: todo
    Columns:
      - Name: title
        ColumnType: label
        DataType: varchar(300)
        IsIndexed: true
      - Name: completed
        ColumnType: truefalse
        DataType: int(1)
        Default: false
```
- Build docker image

```./build.sh```
- Bring up the backend, exposed at port `8080`

```docker-compose up -d```

> Always rebuild docker image if changing schema_models_daptin.yaml

# Client for backend

```javascript

import {DaptinClient} from 'daptin-client'
```



```
const daptinClient = new DaptinClient("http://localhost:8080", false);
daptinClient.worldManager.loadModels().then(function () {
  daptinClient.jsonApi.findAll("todo").then(function(res: any){
    console.log("all todos", res.data)
  })
})

```


## Frontend Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## ...here's the vuex store that doesn't do much but is strongly-typed :-)

```typescript
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
```

## ...and here is one of the two VUE components in the project. so simple!

```typescript
<template>
  <div class="link">
      <a :href="link.url">{{link.description}}</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import * as T from "../types/common";

@Component({
  name: "LinkComponent",
  props: {
    url: String,
    description: String
  }
})
export default class cLink extends Vue {
  link: T.Link = { url: "", description: "Link" };

  mounted() {
    this.link.url = this.$props.url || this.link.url;
    this.link.description = this.$props.description || this.link.description;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
```


