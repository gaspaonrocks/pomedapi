<template>
  <div>
    <a href="#" class="material-icons mdc-toolbar__menu-icon toolbar mdc-menu-anchor" v-on:click="trigger">menu</a>
          <div class="mdc-simple-menu" tabindex="-1">
        <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
          <li class="mdc-list-item" role="menuitem" tabindex="0">
            A Menu Item
          </li>
          <li class="mdc-list-item" role="menuitem" tabindex="0">
            Another Menu Item
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import { MDCSimpleMenu, MDCSimpleMenuFoundation, util } from "@material/menu";

export default {
  name: "custom-menu",
  data() {
    return {};
  },
  methods: {
    trigger: event => {
      let menu = new MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
           console.log("vue", menu, );

      menu.open = !menu.open;
    }
  }
};
</script>
