export default {
  name: "banner",
  data() {
    return {
      data: null
    };
  },
  created() {},
  methods: {
    toggleMenu: event => {
      let menu = document.querySelector(".mdc-simple-menu");
      
      // ajouter ou retirer la classe mdc-simple-menu--open dans le return.
      return menu.classList.contains("mdc-simple-menu--open") ? menu.classList.remove("mdc-simple-menu--open") : menu.classList.add("mdc-simple-menu--open");
    }
  }
};
