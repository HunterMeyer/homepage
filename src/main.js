// main.js
import Vue from 'vue'
import App from './App.vue'
import './plugins'
import router from '@/router'
import store from '@/store/index'

// Global Components
import PostDialog from '@/components/Posts/PostDialog'
Vue.component('app-post-dialog', PostDialog)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {}
}).$mount('#app')
