import Vue from 'vue'
import App from './App.vue'
import GqfButton from '@/components/button.vue'

Vue.config.productionTip = false

Vue.component(GqfButton.name, GqfButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
