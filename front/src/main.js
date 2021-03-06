// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default-dark.css' // This line here
import './css/theme.scss'

Vue.config.productionTip = false
Vue.use(MdButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
