import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from './components/Authorized'
import Auth from './directives/auth'
import request from './utils/request'
Vue.prototype.$request = request
Vue.config.productionTip = false;

import 'ant-design-vue/dist/antd.less' 
import { Layout, Icon, Drawer, Button, Radio, Menu, Form, Input, Select } from 'ant-design-vue'
Vue.use(Select)
Vue.use(Input)
Vue.use(Form)
Vue.use(Menu)
Vue.use(Radio)
Vue.use(Button)
Vue.use(Drawer)
Vue.use(Icon)
Vue.use(Layout)

Vue.component('Authorized', Authorized)
Vue.use(Auth)

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1734808_79gnzxbwyxl.js'
})
Vue.component('IconFont', IconFont)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
