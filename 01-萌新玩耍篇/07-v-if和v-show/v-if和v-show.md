# v-if和v-show

> 知识大纲
1. v-if和v-show - 条件判断
2. v-if
    * 根据表达式的值的真假条件，渲染元素和移除元素
3. v-show
    * 根据表达式的值的真假条件，切换元素的css属性display属性
4. 注意
    * 初始页面根据条件判断是否渲染某一块的模板使用v-if
    * 频繁的切换模板的显示隐藏，使用v-show
    
> 练习
1. 直接上代码   
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <div id="app">
            <input type="checkbox" v-model="checked">
            <p v-if="checked">{{msg}}</p>
            <p v-show="checked">{{msg}}</p>
        </div>
        <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
        <script>
            new Vue({
                el: "#app",
                data(){
                    return {
                        msg: "hello",
                        checked: true
                    }
                }
            })
        </script>
    </body>
    </html>
    ``` 
2. 可以观察开发者工具element
    * v-if为false的时候直接删除了节点。true的时候添加了节点，所以频繁显示隐藏不应该用v-if  
3. v-if扩展，也有else的操作，可参考官方文档v-else，v-else-if    


> 知道你还不过瘾继续吧        
* [返回目录](../../README.md) 
* [上一章-数组的响应数据变化](../06-数组的响应数据变化/数组的响应数据变化.md)
* [下一章-计算属性](../08-计算属性/计算属性.md)      
    