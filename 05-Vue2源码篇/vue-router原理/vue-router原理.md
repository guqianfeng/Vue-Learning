# vue-router原理

## 思考问题
* new Vue中为什么传入router
* $router为什么每个组件都能使用
* 怎么响应式变化(url变化，视图变化)

## 实现思路
* 因为是插件所以需要实现install方法
* 绑定事件
* 创建url和视图组件的对应关系
* 创建router-link,router-view组件

## 简单实现hash模式

```js
let Vue;
class VueRouter {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
  }

  init () {
    this.bindEvents();
    this.createRouteMap(this.$options.routes);
    this.createComponents();
  }

  bindEvents () {
    window.addEventListener('load', this.onHashChange.bind(this));
    window.addEventListener('hashchange', this.onHashChange.bind(this));
  }

  onHashChange () {
    this.app.current = window.location.hash.slice(1) || "/"
  }

  createRouteMap (routes) {
    routes.forEach(route => {
      this.routeMap[route.path] = route.component;
    })
  }

  createComponents () {
    Vue.component('router-link', {
      props: ['to'],
      render (h) {
        return h('a', {
          attrs: {
            href: '#' + this.to
          }
        }, [
          this.$slots.default
        ])
      }
    });
    Vue.component('router-view', {
      render: h => {
        const comp = this.routeMap[this.app.current];
        return h(comp);
      }
    });
  }
}

VueRouter.install = function (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    }
  })
}

export default VueRouter;
```
