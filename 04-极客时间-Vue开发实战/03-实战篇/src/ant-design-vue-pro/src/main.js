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
import { Layout, Icon, Drawer, Button, Radio, Menu, Form, Input } from 'ant-design-vue'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
