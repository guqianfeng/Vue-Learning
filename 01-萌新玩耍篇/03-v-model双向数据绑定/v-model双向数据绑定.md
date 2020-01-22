# v-model双向数据绑定

> 知识大纲
1. Vue将数据对象和DOM进行绑定，彼此之间互相产生影响
    * 数据的改变会引起DOM的改变
    * DOM的改变也会引起数据的变化
    
2. 可交互的表单元素
    * input(text, checkbox, radio)    
    * textarea
    * select
    
3. v-model
    * 在表单元素上创建双向数据绑定
    * 会根据控件类型自动选取正确的方法来更新元素交换的值
    * 负责监听用户的输入事件以更新数据
    
4. 注意
    * 会忽略所有表单元素的value, checked, selected特性的初始值
    * 将Vue实例的数据作为数据来源
    * 需要在数据对象中声明初始值  
    
> 练习
1. input[type=text]
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    <div id="app">
        <input type="text" v-model="msg">
        <p>{{msg}}</p>
    </div>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
    <script>
        let vm = new Vue({
            el: "#app",
            data(){
                return {
                    msg: "hello vue"
                }
            }
        })
    </script>
    </body>
    </html>
    ```         
2. input[type=checkbox]
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    <div id="app">
        <input type="text" v-model="msg">
        <input type="checkbox" v-model="checked">
        <input type="checkbox" name="hobby" v-model="hobby" value="1"> 1
        <input type="checkbox" name="hobby" v-model="hobby" value="2"> 2
        <input type="checkbox" name="hobby" v-model="hobby" value="3"> 3
        <p>{{msg}}</p>
    </div>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
    <script>
        let vm = new Vue({
            el: "#app",
            data(){
                return {
                    msg: "hello vue",
                    checked: true,
                    hobby: []
                }
            }
        })
    </script>
    </body>
    </html>
    ```     

> 知道你还不过瘾继续吧        
* [返回目录](../../README.md) 
* [上一章-v-bind和v-on](../02-v-bind和v-on/v-bind和v-on.md)
* [下一章-列表渲染](../04-列表渲染/列表渲染.md)         