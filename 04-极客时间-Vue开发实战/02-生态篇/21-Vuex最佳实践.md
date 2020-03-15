# 21-Vuex最佳实践

## 知识大纲

### mapXxx

* State - this.$store.state.xxx mapState取值
* Getter - this.$store.getters.xxx mapGetters取值
* Mutation - this.$store.commit('xxx') mapMutations赋值
* Action - this.$store.dispatch('xxx') mapActions赋值
* Moudle

### 使用常量替代Mutation事件类型

* 代码如下
    ```js
    // mutations-types.js
    export const SOME_MUTATION = 'SOME_MUTATION'
    ```
    ```js
    // store.js
    import Vuex from 'vuex'
    import { SOME_MUTATION } from './mutations-types'
    const store = new Vuex.Store({
        state: {...},
        mutations: {
            // 我们可以使用ES2015风格的计算属性命名功能来使用一个常量作为函数名
            [SOME_MUTATION] (state) {
                // mutate state
            }
        }
    })
    ```

### Module

* 开启命名空间 namespaced: true
* 嵌套模块不要太深，尽量扁平化
* 灵活应用 createNamespacedHelpers

## 练习

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-20-Vuex核心概念及底层原理](../02-生态篇/20-Vuex核心概念及底层原理.md)