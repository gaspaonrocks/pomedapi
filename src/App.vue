<template>
  <div>
    <toolbar></toolbar>
    <drawer></drawer>
    <my-main></my-main>
  </div>
</template>

<script>
import Vue from "vue";
import toolbar from "./components/Toolbar";
import drawer from "./components/Drawer";
import myMain from "./components/Main";

Vue.component("toolbar", toolbar);
Vue.component("drawer", drawer);
Vue.component("myMain", myMain);

export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
