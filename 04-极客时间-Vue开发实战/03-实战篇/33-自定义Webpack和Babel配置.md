# 33-自定义Webpack和Babel配置

## 练习

* 在App.vue中把样式先删了
* Home.vue中把HelloWorld删了
* 在main.js中引入ant-design-view
  ```js
  import Vue from "vue";
  import Antd from 'ant-design-vue'
  import App from "./App.vue";
  import router from "./router";
  import store from "./store";
  import 'ant-design-vue/dist/antd.css'

  Vue.config.productionTip = false;

  Vue.use(Antd)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

  ```
* 然后回到App.vue中  
  ```js
  <template>
    <div id="app">
      <a-button>按钮</a-button>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </template>

  <style lang="less">

  </style>

  ```
* 此时看到页面的效果就出来了
* 将引入的css改成less，`import 'ant-design-vue/dist/antd.less'`，此时发现报错了，可以打开[错误提示](https://github.com/ant-design/ant-motion/issues/44)  
* less报错解决方案
  * 新建vue.config.js，记得是在项目的根目录下
  * 参考Vue Cli官网，找到右上角的tab-配置参考
  * 然后找到左侧的css.loaderOptions，复制相关代码到vue.config.js，并做些简单的修改
  * 具体如下
    ```js
    module.exports = {
      css: {
        loaderOptions: {
          less: {
            javascriptEnabled: true
          }
        }
      }
    }    
    ```
  * 重启项目后，就解决了这个问题~ 
* 有时候可以按需引入，比如我们只需要引入个button
  ```js
  import Button from 'ant-design-vue/lib/button'
  import 'ant-design-vue/lib/button/style'

  Vue.use(Button)
  ```   
* 但如果每个都要这么引入，这样就比较繁琐了，可以使用babel 
* 需要先安装`yarn add babel-plugin-import -D`
* 打开[ant-design-vue官网](https://www.antdv.com/docs/vue/introduce-cn/)，能看到babel配置 
* 打开babel.config.js，进行修改
  ```js
  module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
      ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": true }] // `style: true` 会加载 less 文件
    ]
  };
  ```
* 改好这个配置后，我们就可以把前面的2行代码(引入button，引入css)改成1行`import { Button } from 'ant-design-vue'` 
* main.js目前的代码是
  ```js
  import Vue from "vue";
  import App from "./App.vue";
  import router from "./router";
  import store from "./store";
  Vue.config.productionTip = false;

  import { Button } from 'ant-design-vue'
  import 'ant-design-vue/dist/antd.less' 
  Vue.use(Button)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

  ```

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-32-快速创建项目](../03-实战篇/32-快速创建项目.md)
* [下一节-34-如何设计一个高扩展性的路由](../03-实战篇/34-如何设计一个高扩展性的路由.md)