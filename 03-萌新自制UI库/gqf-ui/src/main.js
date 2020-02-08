import Vue from 'vue'
import App from './App.vue'
import '@/assets/font-awesome-4.7.0/scss/font-awesome.scss'
import GqfButton from '@/components/button.vue'
import GqfDialog from '@/components/dialog.vue'
import GqfInput from '@/components/input.vue'
import GqfSwitch from '@/components/switch.vue'
import GqfRadio from '@/components/radio.vue'
import GqfRadioGroup from '@/components/radio-group.vue'

Vue.config.productionTip = false

Vue.component(GqfButton.name, GqfButton)
Vue.component(GqfDialog.name, GqfDialog)
Vue.component(GqfInput.name, GqfInput)
Vue.component(GqfSwitch.name, GqfSwitch)
Vue.component(GqfRadio.name, GqfRadio)
Vue.component(GqfRadioGroup.name, GqfRadioGroup)

new Vue({
  render: h => h(App)
}).$mount('#app')
