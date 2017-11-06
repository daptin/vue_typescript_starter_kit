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
