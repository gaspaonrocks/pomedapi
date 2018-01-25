import Vue from 'vue'
import vueMdc from 'vue-mdc'
import App from './App.vue'

import 'vue-mdc/dist/vue-mdc.css'

Vue.config.productionTip = true
Vue.use(vueMdc)

// mount app
const main = Vue.extend({
  render: (h) => h(App) 
})
new main().$mount('#app')