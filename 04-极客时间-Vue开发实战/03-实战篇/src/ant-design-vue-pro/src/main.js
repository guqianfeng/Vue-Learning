import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from './components/Authorized'
import Auth from './directives/auth'
import request from './utils/request'

import VueI18n from 'vue-i18n'
import zhCN from './locale/zhCN'
import enUS from './locale/enUS'
import queryString from 'querystring'

Vue.prototype.$request = request
Vue.config.productionTip = false;

import 'ant-design-vue/dist/antd.less' 
import { Layout, Icon, Drawer, Button, Radio, Menu, Form, Input, Select, LocaleProvider, Dropdown, DatePicker } from 'ant-design-vue'
Vue.use(DatePicker)
Vue.use(Dropdown)
Vue.use(LocaleProvider)
Vue.use(Select)
Vue.use(Input)
Vue.use(Form)
Vue.use(Menu)
Vue.use(Radio)
Vue.use(Button)
Vue.use(Drawer)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(VueI18n)
Vue.component('Authorized', Authorized)
Vue.use(Auth)

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || 'zhCN',
  messages: {
    zhCN: {
      message: zhCN
    },
    enUS: {
      message: enUS
    }
  }
})

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1734808_79gnzxbwyxl.js'
})
Vue.component('IconFont', IconFont)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
