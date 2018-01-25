<template>
<div>
  <h1>HELLO WORLD ! </h1>
<button v-on:click="displayInfo">this is toggle</button>
</div>
</template>

<script>
import {
  MDCPersistentDrawer,
  MDCPersistentDrawerFoundation
} from "@material/drawer";

export default {
  name: "myMain",
  data() {
    return {};
  },
  created() {},
  methods: {
    displayInfo: () => {
      let drawer = new MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'))
      console.log('vue', drawer)
    }
  }
};
</script>
