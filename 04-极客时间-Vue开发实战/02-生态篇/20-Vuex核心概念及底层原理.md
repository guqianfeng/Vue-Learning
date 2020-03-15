# 20-Vuex核心概念及底层原理

## 知识大纲

### 核心概念

* State - this.$store.state.xxx 取值
* Getter - this.$store.getters.xxx 取值
* Mutation - this.$store.commit('xxx') 赋值
* Action - this.$store.dispatch('xxx') 赋值
* Moudle

### 底层原理

* State - 提供一个响应式的数据 
* Getter - 借助Vue的计算属性computed来实现缓存
* Mutation - 更改state方法
* Action - 触发mutation方法
* Moudle - Vue.set动态添加state到响应式数据中

### 简单实现

* 具体代码如下
    ```js
    import Vue from 'vue'
    const Store = function Store (options = {}) {
        const {state = {}, mutations = {}} = options
        this.vm = new Vue({
            data: {
                $$state: state
            }
        })
        this._mutations = mutations
    }
    Store.prototype.commit = function (type, payload) {
        if(this._mutations[type]){
            this._mutations[type](this.state, payload)
        }
    }
    Object.defineProperties(Store.prototype, {
        state: {
            get: function () {
                return this._vm._data.$$state
            }
        }
    })
    export default {Store}    
    ```

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-19-如何在Vue中使用Vuex](../02-生态篇/19-如何在Vue中使用Vuex.md)