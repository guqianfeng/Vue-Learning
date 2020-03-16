# 22-VueRouter的使用场景

## 传统开发模式

* www.xxx.com - index.html
* www.xxx.com/about - about.html
* www.xxx.com/xxx - xxx.html

## 单页面开发模式

* www.xxx.com - index.html
* www.xxx.com/about - index.html
* www.xxx.com/xxx - index.html

## Vue Router解决的问题

* 监听URL的变化，并在变化前后执行相应的逻辑
* 不同的URL对应不同的组件
* 提供多种方式改变URL的API(URL的改变不能导致浏览器刷新)

## 使用方式

* 提供一个路由配置表，不同URL对应不同组件的配置
* 初始化路由实例new VueRouter()
* 挂载在Vue实例上
* 提供一个路由占位，用来挂载URL匹配到的组件

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-21-Vuex最佳实践](../02-生态篇/21-Vuex最佳实践.md)