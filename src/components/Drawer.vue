<template>
  <aside class="mdc-drawer mdc-drawer--persistent mdc-typography">
  <nav class="mdc-drawer__drawer">
    <header class="mdc-drawer__header">
      <div class="mdc-drawer__header-content">
        Header here
      </div>
    </header>
    <nav id="icon-with-text-demo" class="mdc-drawer__content mdc-list">
      <a class="mdc-list-item mdc-list-item--activated" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>Inbox
      </a>
      <a class="mdc-list-item" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>Star
      </a>
    </nav>
  </nav>
</aside>
</template>

<script>
import {
  MDCPersistentDrawer,
  MDCPersistentDrawerFoundation
} from "@material/drawer";

export default {
  name: "drawer",
  data() {
    return {
      drawer: null
    };
  },
  created() {
    this.setDrawer();
  },
  methods: {
    toggle: event => {
      let drawer = new MDCPersistentDrawer(
        document.querySelector(".mdc-drawer--persistent")
      );
      console.log(drawer);
    },
    setDrawer: () => {}
  }
};
</script>
