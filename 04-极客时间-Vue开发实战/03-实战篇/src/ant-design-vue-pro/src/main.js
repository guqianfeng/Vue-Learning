import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

import 'ant-design-vue/dist/antd.less' 
import { Layout, Icon, Drawer, Button, Radio } from 'ant-design-vue'
Vue.use(Radio)
Vue.use(Button)
Vue.use(Drawer)
Vue.use(Icon)
Vue.use(Layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
