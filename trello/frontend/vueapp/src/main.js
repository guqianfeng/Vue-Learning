import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/css.css'
import TMessage from '@/components/TMessage/TMessage.js'

Vue.prototype.$message = TMessage

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
