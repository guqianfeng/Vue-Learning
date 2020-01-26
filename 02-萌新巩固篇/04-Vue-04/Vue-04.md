# Vue-04

> 知识大纲

* 生命周期

    ![](./images/lifecycle.png)

* 个人总结下，一般就是前后关系，请看下面的解说
    * beforeCreate - 创建前
        * 初始化阶段，应用不多
    * created - 创建后
        * 在实例创建完成后被立即调用，该阶段完成了对data中的数据的observer，该阶段可以处理一些异步任务
    * beforeMount - 挂载前
        * 在挂载开始之前被调用，应用不多
    * mounted - 挂载后
        * 该阶段执行完了模板解析，以及挂载。同时组件根组件元素被赋给了$el属性，该阶段可以通过DOM操作来对组件内部元素进行处理
    * beforeUpdate - 更新前
    * updated - 更新后
    * beforeDestroy - 摧毁前
    * destroyed - 摧毁后

* 还有个特殊的，捕获错误的 - errorCaptured    

> 练习

1. 生命周期
    * 先来个简单的例子，老样子，先上代码
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <div id="app">
                <gqf-component></gqf-component>
            </div>
            <script src="../js/vue.js"></script>
            <script>
                let app = new Vue({
                    el: "#app",
                    components: {
                        "gqf-component": {
                            template: `<div>我是梅利奥猪猪</div>`,
                            beforeCreate(){
                                console.log("gqf-component - beforeCreate")
                            },
                            created(){
                                console.log("gqf-component - created")
                            },
                            beforeMount(){
                                console.log("gqf-component - beforeMount")
                            },
                            mounted(){
                                console.log("gqf-component - mounted")
                            },
                            beforeUpdate(){
                                console.log("gqf-component - beforeUpdate")
                            },
                            updated(){
                                console.log("gqf-component - updated")
                            },
                            beforeDestroy(){
                                console.log("gqf-component - beforeDestroy")
                            },
                            destroyed(){
                                console.log("gqf-component - destroyed")
                            },
                        }
                    },
                    beforeCreate(){
                        console.log("beforeCreate")
                    },
                    created(){
                        console.log("created")
                    },
                    beforeMount(){
                        console.log("beforeMount")
                    },
                    mounted(){
                        console.log("mounted")
                    },
                    beforeUpdate(){
                        console.log("beforeUpdate")
                    },
                    updated(){
                        console.log("updated")
                    },
                    beforeDestroy(){
                        console.log("beforeDestroy")
                    },
                    destroyed(){
                        console.log("destroyed")
                    },
                })
            </script>
        </body>
        </html>         
        ```
    * 来看下页面上打印的顺序，就能发现，父组件在挂在前会先去处理子组件，子组件处理好了以后在挂载，有点像栈

        ![](./images/生命周期打印.jpg)     

> 知道你还不过瘾继续吧  

* [返回目录](../../README.md) 