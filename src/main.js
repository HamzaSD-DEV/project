import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'uikit/dist/css/uikit.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import 'popper.js'
import'./style/styles.css'

import Vuex from 'vuex'


Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
 
  router,
  render: h => h(App)
}).$mount('#app')
