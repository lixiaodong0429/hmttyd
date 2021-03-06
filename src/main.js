import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vant,
  render: h => h(App)
}).$mount('#app')
