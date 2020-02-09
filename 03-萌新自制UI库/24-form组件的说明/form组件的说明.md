# 24-form组件的说明

> 说明

* form组件用于整合前面封装好的各个表单组件
* 这里只做个简单的form组件 

> 知识大纲

* form组件结构
    ```vue
    <template>
        <div class="gqf-form">
            <slot></slot>
        </div>
    </template>

    <script>
    export default {
        name: 'GqfForm',
        provide () {
            return {
                Form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            labelWidth: {
                type: String,
                default: '80px'
            }
        }
    }
    </script>

    <style>
    </style>
    ```

> 练习

* 新建2个组件`form`和`form-item`组件并注册
* 然后在App.vue中，我们写下我们最终需要的效果是什么样的
    * data中提供个model对象，指的是所有表单元素的数据集
    * 然后在form组件上`:model="model"`
    * 具体代码如下
        ```html
        <gqf-form :model="model">
            <gqf-form-item label="用户名">
                <gqf-input placeholder="请输入用户名"></gqf-input>
            </gqf-form-item>
        </gqf-form>        
        ``` 

> 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-23-checkbox与checkbox-group](../23-checkbox与checkbox-group/checkbox与checkbox-group.md)