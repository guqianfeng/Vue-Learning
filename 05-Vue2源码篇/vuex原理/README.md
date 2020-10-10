# vuex原理

## 思考问题
* 为什么new Vue时需要传入store
* 为什么所有组件都能访问$store
* 为什么改变state能响应式变化

## 实现思路
* 插件需要实现install
* Store需要实现commit,dispatch
* getters因为是只读属性需要使用`Object.defineProperty`

## 实现简易的vuex

```js
let Vue;

class Store {
  constructor (options) {
    this.state = new Vue({
      data: options.state
    })
    this.mutations = options.mutations;
    this.actions = options.actions;
    // console.log(this.getters)
    options.getters && this.handleGetters(options.getters)
  }
  commit = (type, arg) => {
    this.mutations[type](this.state, arg);
  }
  dispatch(type, arg) {
    this.actions[type]({commit: this.commit, state: this.state}, arg);
  }
  handleGetters (getters) {
    this.getters = {}
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state);
        }
      })
    })
  }
}

function install (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}


```
