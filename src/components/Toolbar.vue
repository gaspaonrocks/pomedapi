<template>
 <header class="mdc-toolbar">
  <div class="mdc-toolbar__row">
    <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
     <custom-menu></custom-menu>
      <span class="mdc-toolbar__title">Title</span>
    </section>
  </div>
</header>
</template>


<script>
import Vue from "vue";
import customMenu from "./Menu";

Vue.component("custom-menu", customMenu);

export default {
  name: "toolbar",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>

</style>
