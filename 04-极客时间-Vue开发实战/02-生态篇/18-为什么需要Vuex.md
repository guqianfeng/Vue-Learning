# 18-为什么需要Vuex

## 知识大纲

* Vuex是一种状态管理模式
* 单向数据流
    * State - 驱动应用的数据源
    * View - 以声明方式将state映射到视图
    * Action - 响应在view上的用户输入导致的状态变化
    * State -> View -> Action -> State -> ....
* Vuex运行机制
    * Vue Component(dispatch) -> actions(commit) - Backend API -> mutations(mutate) - 记录数据变化Devtools -> state(render) -> Vue Component     
    * 没有异步操作，Vue Component可以直接commit到mutations

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-17-template和jsx的对比以及它们的本质](../01-基础篇/17-template和jsx的对比以及它们的本质.md)
* [下一节-19-如何在Vue中使用Vuex](./19-如何在Vue中使用Vuex.md)