// main.js
import Vue from 'vue'
import './plugins'

import App from './App.vue'
import router from '@/router'
import store from '@/store/index'

// Global Components
import PostDialog from '@/components/Posts/PostDialog'
Vue.component('app-post-dialog', PostDialog)

Vue.config.productionTip = false

Vue.prototype.$siteName = process.env.VUE_APP_TITLE || 'Homepage'

new Vue({
  router,
  store,
  render: h => h(App),
  created () {}
}).$mount('#app')
