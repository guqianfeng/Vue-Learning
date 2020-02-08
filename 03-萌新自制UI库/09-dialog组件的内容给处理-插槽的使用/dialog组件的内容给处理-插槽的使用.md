# 09-dialog组件的内容给处理-插槽的使用

> 练习

* 处理width和top

    * 先父组件传入属性`<gqf-dialog title="我是梅利奥猪猪" width="60%" top="30px"></gqf-dialog>`
    * 子组件props接收
        ```js
        props: {
            title: {
                type: String,
                default: '提示'
            },
            width: {
                type: String,
                default: '50%'
            },
            top: {
                type: String,
                default: '15vh'
            }
        }        
        ```
    * 子组件设置样式`:style="{width, marginTop: top}"`    
    * 看页面上的dialog的样子吧~

        ![](./images/top和width属性.jpg)


* 处理内容

    * 之前处理title的时候我们用了具名插槽，这里内容我们使用默认插槽的方式
        ```
        <div class="gqf-dialog__body">
            <slot>
                <span>这是一段消息</span>
            </slot>
        </div>        
        ```
    * 然后在App.vue中直接这么改
        ```
        <gqf-dialog title="我是梅利奥猪猪" width="60%" top="30px">
            <p>希望自己的练习能给大家带来帮助</p>
        </gqf-dialog>        
        ``` 
    * 直接看效果

        ![](./images/默认插槽.jpg)  


* 处理底部

    * 我们现在的模板是有底部2个按钮的，其实这边可以做个底部插槽默认没有按钮，用户需要可以自己添加底部  
        ```
        <div class="gqf-dialog__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>        
        ```
    * 然后看页面果然底部没有按钮，然后我们手动传下 
        ```
        <gqf-dialog title="我是梅利奥猪猪" width="60%" top="30px">
            <p>希望自己的练习能给大家带来帮助</p>
            <template v-slot:footer>
                <gqf-button>取消</gqf-button>
                <gqf-button type="primary">确定</gqf-button>
            </template>
        </gqf-dialog>        
        ```              


> 知道你还不过瘾继续吧       

* [上一节-08-dialog组件-组件创建标题的处理](../08-dialog组件-组件创建标题的处理/dialog组件-组件创建标题的处理.md)
* [下一节-10-dialog组件-对话框的显示和隐藏](../10-dialog组件-对话框的显示和隐藏/dialog组件-对话框的显示和隐藏.md)
* [返回目录](../../README.md) 