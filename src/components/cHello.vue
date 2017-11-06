<template>
  <div class="hello">
    <h1 v-on:click="onClick">The {{this.$store.state.links.length}} html links below are defined in the Vuex store</h1> 
    <ul>
      <li v-for="link in this.$store.state.links" :key="link.url"><a :href="link.url">{{link.description}}</a></li>
    </ul><br>
    <button v-on:click="$store.commit('reverse')">Reverse the links using a mutation</button><br><br>
    <h1>The link below is a .VUE Component [not a simple html tag]</h1>
    <ul>
      <li><cLink url="https://www.google.com" description="Google"/></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import cLink from "../components/cLink.vue";
import * as T from "../types/common";

@Component({
  components: { cLink }
})
export default class cHello extends Vue {
  onClick(): void {
    console.log("a non-vuex method has been called");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
