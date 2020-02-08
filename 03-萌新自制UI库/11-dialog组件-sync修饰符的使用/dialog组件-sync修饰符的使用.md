# 11-dialog组件-sync修饰符的使用

> 练习

* sync修饰符

    * sync其实是个语法糖，我们先来写个demo组件来看下一般的子传父写法，温习下上一节的做法
    * 在src下新建个demo文件夹，再新建个demo组件
        ```vue
        <template>
        <div>
            <h1>demo</h1>
            <p>{{money}}</p>
            <div>
            <gqf-button type="primary" @click="changeMoney">click</gqf-button>
            </div>
        </div>
        </template>

        <script>
        export default {
        name: 'demo',
        props: {
            money: {
            type: Number,
            default: 100
            }
        },
        methods: {
            changeMoney () {
            this.$emit('update:money', 200)
            }
        }
        }
        </script>
        
        ```
    * 所以父组件一般的使用是这样的
        * `<demo :money="money" @update:money="changeMoney"></demo>`
        * 在注册changeMoney的方法 
            ```js
            methods: {
                changeMoney () {
                this.$emit('update:money', 200)
                }
            }            
            ```  
    * 这里有个语法糖其实就是sync，直接方法也不需要注册，直接使用`<demo :money.sync="money"></demo>`
    * 效果和之前是一样的  

* 优化dialog组件

    * 首先emit的方法名改成 
        ```js
        handleClose () {
            // console.log('close')
            // this.$emit('close', false)
            this.$emit('update:visible', false) //改成update:visible
        }        
        ```
    * 然后使用sync修饰符，同样的实现，代码可读性更高了，使用的人也更方便
        ```
        <!-- <gqf-dialog title="我是梅利奥猪猪" width="60%" top="30px" :visible="visible" @close="close"> -->
        <gqf-dialog title="我是梅利奥猪猪" width="60%" top="30px" :visible.sync="visible">
            <p>希望自己的练习能给大家带来帮助</p>
            <template v-slot:footer>
                <gqf-button @click="visible = false">取消</gqf-button>
                <gqf-button type="primary" @click="visible = false">确定</gqf-button>
            </template>
        </gqf-dialog>        
        ```               

> 知道你还不过瘾继续吧       

* [上一节-10-dialog组件-对话框的显示和隐藏](../10-dialog组件-对话框的显示和隐藏/dialog组件-对话框的显示和隐藏.md)
* [下一节-12-dialog组件-使用过渡实现动画效果](../12-dialog组件-使用过渡实现动画效果/dialog组件-使用过渡实现动画效果.md)
* [返回目录](../../README.md)