import Vue from 'vue'
import App from './App.vue'
import './plugins'
import router from '@/router'
import store from '@/store/index'
import '@/assets/css/tailwind.css'
 
Vue.config.productionTip = false

// Filters
import DateFilter from '@/filters/Date'
Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {}
}).$mount('#app')
