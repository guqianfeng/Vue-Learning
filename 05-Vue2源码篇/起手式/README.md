# 起手式

* 打开github.com,搜索vue，很轻松就能找到`https://github.com/vuejs/vue`
* 把代码克隆下来，有如下几个好处
  * 可以切不同版本分支看
  * 自己可以新建分支，反正本地代码随意修改调试
  * 该学习笔记，vue的版本是2.6.11
* 项目所需依赖，记得安装  
* 修改下dev脚本，`"dev": "rollup -w -c scripts/config.js --sourcemap --environment TARGET:web-full-dev",` 
  * 添加的`--sourcemap`为了看源码，找到对应的代码和文件对应
  * `npm run dev`玩起来了呀
  * 可以看到生成了vue.js.map
* 寻找入口文件  
  * 找到文件`scripts/config.js`
  * 搜索`web-full-dev`，找到入口文件`entry-runtime-with-compiler.js`
* 在`examples/commits/index.html`中玩耍
  * 引入的js把.min去掉
  * 可以打断点，然后找源文件看代码
  * 前面的入口文件，可以看到$mount方法，可以去理解代码
    * 如有个判断条件`!options.render`，就能知道竞争条件，render函数有很高的优先级
    * [官方render函数例子](https://cn.vuejs.org/v2/guide/render-function.html#使用-JavaScript-代替模板功能)
    * [知乎-为什么vue写render函数的灵活性更高？](https://www.zhihu.com/question/406354817)
* `entry-runtime-with-compiler`是对$mount的扩展，根据一开始import可以找到实现$mount的地方
* 在runtime/index中可以找到实现$mount，然后顺藤摸瓜，根据一开始的import找到core下的index
  * initGlobalAPI - 初始化全局API
    * 能看到熟悉的set，del，nextTick

* 在根据core下index中，一开始的import就可以找到我们的构造函数了(core/instance下)   
