import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$siteName = process.env.VUE_APP_TITLE || 'Homepage'

new Vue({
  render: h => h(App),
  created () {}
}).$mount('#app')
