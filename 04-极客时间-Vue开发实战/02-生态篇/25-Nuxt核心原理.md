# 25-Nuxt核心原理

## 流程图

* 不使用ssr
    * 客户端 -> 请求 -> 服务端(req - res index.html) -> 返回空壳index.html -> 客户端

* 使用ssr
    * 客户端 -> 请求 -> 服务端(req - renderToString(app) -res index.html) -> index.html -> 客户端

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-24-Nuxt解决了什么问题](../02-生态篇/24-Nuxt解决了什么问题.md)
* [下一节-26-UI组件库对比](../02-下态篇/26-UI组件库对比.md)