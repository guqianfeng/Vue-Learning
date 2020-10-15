# 配置相关
* 在src下新建`vue.config.js`
* 配置端口，公共路径，title
  ```js
  // vue.config.js
  const port = 7070;
  const title = '最佳实践'

  module.exports = {
    publicPath: '/best-practise', // 这样我们打开的路径就变成 http://localhost:7070/best-practise/  
    devServer: {
      port
    },
    configureWebpack: {
      name: title //这里还需要改public下index.html中title <title><%= webpackConfig.name %></title>
    }
  }  
  ```
* 查看配置的命令`vue inspect`
  * 就看rules`vue inspect --rules`
  * 查看单个rule在命令后面跟上需要查看的项`vue inspect --rule svg`  
  * 就看plugins`vue inspect --plugins`
  * 查看单个plugins在命令后面跟上需要查看的项`vue inspect --plugin vue-loader`

* 链式操作高级案例 - 关于svg的图标实践
  * 安装`yarn add svg-sprite-loader -D`
  * 在[iconfont](https://www.iconfont.cn/)上随意下几个svg，存至`src/icons/svg`目录下
  * 因为有svg-loader的关系，所以我们要做些链式操作
    * svg-loader - 排除路径`src/icons/svg`
    * svg-sprite-loader - 配置路径`src/icons/svg`
    * 具体代码如下，可以查看[Vue-CLI关于链式操作文档](https://cli.vuejs.org/zh/guide/webpack.html#链式操作-高级)
    ```js
    const path = require('path');

    function resolve (dir) {
      return path.join(__dirname, dir)
    } // 获取绝对路径

    const port = 7070;
    const title = '最佳实践'

    module.exports = {
      publicPath: '/best-practise',
      devServer: {
        port
      },
      configureWebpack: {
        name: title
      },
      chainWebpack(config) {
        config.module.rule('svg') //找到svg-loader
          .exclude.add(resolve('src/icons')) //排除src/icons下的svg文件
          .end();
        config.module.rule('icons') //自己定义icons规则
          .test(/\.svg$/) //匹配svg文件后缀
          .include.add(resolve('src/icons')) //只管src/icons下的svg文件
          .end()
          .use('svg-sprite-loader') 
          .loader('svg-sprite-loader') //使用svg-sprite-loader
          .options({
            symbolId: 'icon-[name]'
          }) //配置options
          .end()
      }
    }
    ```
    * 此时可以到App.vue玩一把，页面router-link中加入图标
    ```
    <template>
      <div id="app">
        <div id="nav">
          <router-link to="/">
          <svg>
            <use xlink:href="#icon-qq"></use>
          </svg>
          Home
          </router-link> |
          <router-link to="/about">
          About
          </router-link>
        </div>
        <router-view/>
      </div>
    </template>
    <script>
    import "@/icons/svg/qq.svg"
    export default {
      
    }
    </script>
    <style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    #nav {
      padding: 30px;
    }

    #nav a {
      font-weight: bold;
      color: #2c3e50;
    }

    #nav a.router-link-exact-active {
      color: #42b983;
    }
    </style>

    ```
    * 此时效果出来了，但图标每次都需要引入都不方便，还要写svg的代码，所以还需要完成功能，自动引入和封装svg组件
    * [自动引入](https://www.jianshu.com/p/c894ea00dfec)
      * 在icons目录下新建index.js
      ```js
      const req = require.context('./svg', false, /\.svg$/);
      console.log(req, req.keys()) // 在浏览器控制台一看就懂了 keys返回的是[./qq.svg, ./wechat.svg]
      req.keys().map(req)
      ```
      * 在main.js中import下
      * 把App.vue中引入svg图标的代码删除，发现qq的图标依然在，同时我们添加微信的图标也没问题
    * 封装svg组件
      * 在components里新建SvgIcon.vue
      ```
      <template>
        <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
          <use :xlink:href="iconName"></use>
        </svg>
      </template>

      <script>
      export default {
        name: 'SvgIcon',
        props: {
          iconClass: {
            type: String,
            required: true
          },
          className: {
            type: String,
            default: ''
          }
        },
        computed: {
          iconName () {
            return `#icon-${this.iconClass}`; 
          },
          svgClass () {
            if (this.className) {
              return `svg-icon-${this.className}`
            } else {
              return 'svg-icon'
            }
          }
        }
      };
      </script>

      <style>
        .svg-icon {
          width: 1em;
          height: 1em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
      </style>

      ```
      * icons下的index.js中全局引入
      ```
      import Vue from 'vue'
      import SvgIcon from '@/components/SvgIcon.vue'

      Vue.component('svg-icon', SvgIcon)

      const req = require.context('./svg', false, /\.svg$/);
      //[./qq.svg, ./wechat.svg]
      console.log(req, req.keys())
      req.keys().map(req)
      ```
      * 然后就可以这么使用了`<svg-icon icon-class="qq"></svg-icon>`
