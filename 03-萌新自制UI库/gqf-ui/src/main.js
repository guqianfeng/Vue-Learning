import Vue from 'vue'
import App from './App.vue'
import GqfButton from '@/components/button.vue'
import '@/assets/font-awesome-4.7.0/scss/font-awesome.scss'
import GqfDialog from '@/components/dialog.vue'

Vue.config.productionTip = false

Vue.component(GqfButton.name, GqfButton)
Vue.component(GqfDialog.name, GqfDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
