import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.filter('RMB', (price) => {
  return `￥ ${price} 元`
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
