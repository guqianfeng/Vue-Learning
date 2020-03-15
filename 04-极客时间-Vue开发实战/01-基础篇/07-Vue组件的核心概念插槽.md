# 07-Vue组件的核心概念插槽

## 知识大纲

* 插槽 - 返回组件的函数

## 练习

* 默认插槽
    * 使用插槽完善我们的todo-list
    * 比如里面的内容不希望写死todo-item
        ```js
        Vue.component('todo-list', {
            template: `
                <ul>
                    <slot></slot>
                </ul>            
            `,
        })        
        ```
    * 然后页面的结构如下
        ```html
        <todo-list>
            <todo-item 
                v-for="item in list" 
                :title="item.title" 
                :del="item.del"
                @delete="deleteItem"
            ></todo-item>
        </todo-list>        
        ```    

* 具名插槽
    * 比如我们现在的每个todo-item需要2个图标，一个前置图标，一个后置图标
    * 我们就可以使用具名插槽，首先在注册组件的时候需要这么写   
        ```js
        Vue.component('todo-item', {
            props: {
                title: String,
                del: {
                    type: Boolean,
                    default: false,
                }
            },
            template: `
                <li>
                    <slot name="pre-icon"></slot>
                    <span v-if="!del">{{title}}</span>
                    <span v-else style="text-decoration: line-through;">{{title}}</span>
                    <slot name="suf-icon"></slot>
                    <button v-show="!del" @click="deleteHandle">删除</button>
                </li>                
            `,
            methods: {
                deleteHandle () {
                    this.$emit('delete', this.title)
                }
            }
        })        
        ``` 
    * 然后页面中结构是这样的，注意这里使用的是2.6版本，用的template标签，然后v-slot:xxx，注意xxx就是你注册组件时起的名字 
        ```html
        <todo-list>
            <todo-item 
                v-for="item in list" 
                :title="item.title" 
                :del="item.del"
                @delete="deleteItem"
            >
                <template v-slot:pre-icon>
                    前置图标
                </template>
                <template v-slot:suf-icon>
                    后置图标
                </template>
            </todo-item>
        </todo-list>        
        ```

* 作用域插槽 
    * 用于把子组件的值传给父组件
    * 先在todo-item中定义数据，并且使用作用域插槽
        ```js
        Vue.component('todo-item', {
            props: {
                title: String,
                del: {
                    type: Boolean,
                    default: false,
                }
            },
            template: `
                <li>
                    <slot name="pre-icon" :val="value"></slot>
                    <span v-if="!del">{{title}}</span>
                    <span v-else style="text-decoration: line-through;">{{title}}</span>
                    <slot name="suf-icon"></slot>
                    <button v-show="!del" @click="deleteHandle">删除</button>
                </li>                
            `,
            methods: {
                deleteHandle () {
                    this.$emit('delete', this.title)
                }
            },
            data () {
                return {
                    value: Math.random()
                }
            }
        })        
        ```   
    * 注意上述代码中，`<slot name="pre-icon" :val="value"></slot>`，`:val`是到父组件使用与之对应的，后面的`=value`则是data中定义的这个value
    * 此时看父组件的写法，接收val，并且展示，注意接收的是个对象
        ```html
        <template v-slot:pre-icon="{val}">
            前置图标 - {{val}}
        </template>        
        ```  
    * 我们还可以使用默认的写法，比如子组件，插槽这么写
        ```js
        <slot name="suf-icon">哈哈</slot>        
        ``` 
    * 父组件如果不传template后置图标默认就是这个哈哈~                       

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-06-Vue组件的核心概念事件](./06-Vue组件的核心概念事件.md)