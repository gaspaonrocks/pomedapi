<template>
  <div class="mdc-typography">
    <header class="mdc-toolbar mdc-toolbar--waterfall mdc-toolbar--flexible-space-maximized">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a v-on:click="toggleMenu" href="#" class="material-icons mdc-toolbar__menu-icon  mdc-menu-anchor">menu</a>
          <div class="mdc-simple-menu" tabindex="-1">
            <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
              <li class="mdc-list-item" role="menuitem" tabindex="0">A Menu Item</li>
              <li class="mdc-list-item" role="menuitem" tabindex="0">Another Menu Item</li>
            </ul>
          </div>
        </section>
        <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
          <span class="mdc-toolbar__title">Hello World !</span>
        </section>
      </div>
    </header>
    <ul>
      <li>Le personnel</li>
      <li>Les enfants</li>
      <li>La structure</li>
    </ul>
  </div>
</template>

<style src='./Banner.style.css'>

</style>

<script src='./Banner.script.js'>
</script>
