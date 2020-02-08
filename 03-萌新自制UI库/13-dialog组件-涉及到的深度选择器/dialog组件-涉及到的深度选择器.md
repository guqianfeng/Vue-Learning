# 13-dialog组件-涉及到的深度选择器

> 知识大纲

* style添加属性scoped原理
    * scoped会给当前组件的模板中所有的元素都添加一个随机的属性
    * scoped会给当前组件所有样式，添加一个对应的属性选择器

* 深度选择器
    * scss - ::v-deep
    * less - /deep/
    * css - >>>
    * 文档在Vue Loader的[官网](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#深度作用选择器)上
    * 深度选择器原理，其实就是加了scoped但是不会在元素上面加上特定的属性选择器


> 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-12-dialog组件-使用过渡实现动画效果](../12-dialog组件-使用过渡实现动画效果/dialog组件-使用过渡实现动画效果.md)
* [下一节-14-input组件-基本结构与常用的属性](../14-input组件-基本结构与常用的属性/input组件-基本结构与常用的属性.md)