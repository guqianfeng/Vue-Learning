# 04-第一个Vue程序

## 练习

### 初次玩耍
* 新建index.html
* 根据官网，引入cdn`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
* 书写第一个最简单的Vue程序
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="app">
            {{message}}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
            var vm = new Vue({
                el: '#app',
                data: {
                    message: 'hello world'
                }
            })
        </script>
    </body>
    </html>    
    ```
* 此时就能看到页面中渲染了hello world

### 响应式机制
* 在浏览器控制台输入`vm.message = 'hello vue'`，能看到页面也能一起改变，这是Vue的响应式机制

### 双大括号里写表达式
* 注意我们可以在双大括号里写表达式，所以还可以这么写`{{message + " - " + message}}`
* 此时页面渲染的就是2个hello world了

### v-bind
* 这里我们可以在试下绑定，比如id值，可以这么玩 
    ```html
    <div id="message">test</div>
    <div :id="message">test</div>    
    ```
* 上述代码，第一行的id就是**message**，第二行因为用了绑定，所以id是**hello world** 

### v-if和v-else
* 我们现在data里定义数据
    ```js
    item: {
        title: "课程1",
        del: false
    }
    ```
* 页面结构如下
    ```html
    <ul>
        <li>
            <span v-if="!item.del">{{item.title}}</span>
            <span v-else style="text-decoration: line-through;">{{item.title}}</span>
        </li>
    </ul> 
    ```    
* 此时页面中显示的肯定是没有删除线的课程1，然后我们在控制台输入`vm.item.del = true`，就能看到课程1有了删除线   

### v-show
* v-show实际是改变display样式
    ```html
    <li>
        <span v-if="!item.del">{{item.title}}</span>
        <span v-else style="text-decoration: line-through;">{{item.title}}</span>
        <button v-show="!item.del">删除</button>
    </li>    
    ```
* 同样的操作，在控制台输入`vm.item.del = true`，我们会发现删除按钮也不见了，但实际上元素还在，而v-if是会删除元素的  

### v-for
* 这次我们在data里定义list数组
    ```js
    list: [
        {
            title: "课程1",
            del: false
        },
        {
            title: "课程2",
            del: true
        },
    ]    
    ```
* 页面结构
    ```html
    <ul>
        <li v-for="item in list">
            <span v-if="!item.del">{{item.title}}</span>
            <span v-else style="text-decoration: line-through;">{{item.title}}</span>
            <button v-show="!item.del">删除</button>
        </li>
    </ul>    
    ```
* 此时就能看到课程1没删除线，有删除按钮，而课程2没删除按钮，有删除线        

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-03-内容综述](./03-内容综述.md)