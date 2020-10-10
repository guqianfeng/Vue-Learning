# vdom及diff算法

## 如何运转

* js数据劫持响应式改变的是 -> vdom
* vdom通过patch打补丁 -> 真实dom
* 真实dom通过events -> js

## 代码如何看

* `src/core/lifecycle.js`中可以找到调用patch的地方
* 方法lifecycleMixin
  * `_update`方法中`__patch__`方法就是打补丁的方法，打完补丁返回了真实dom`#$el`
* 方法mountComponent
  * 核心代码`vm._update(vm._render(), hydrating)`
  * `_render`函数可以在同级目录下`render.js`中找到
* patch函数在`src/platforms/web/runtime/index`中可以看到patch
  * `Vue.prototype.$mount`的上面能看到`Vue.prototype.__patch__ = inBrowser ? patch : noop`
  * 在同级目录下可以看到`patch.js`
  * `nodeOps`里都是真实节点dom操作
  * `modules`里对真实dom属性操作，如`attr`，`class`等
  * 然后就可以找到`core/vdom/patch`
* 在`core/vdom/patch`直接搜索`createPatchFunction`
 * 方法最后返回了`return function patch`这是我们真正打补丁的函数
 * 可以看到最后返回了真实dom`return vnode.elm`
 * 具体diff算法可以结合[文章-详解vue的diff算法](https://www.cnblogs.com/wind-lanyan/p/9061684.html)和源码一起看
