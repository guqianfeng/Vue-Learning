# input组件-v-model属性支持

> 知识大纲

* v-model
    * 双向数据绑定，其实是个语法糖
    * 等价于bind + @input
    * 具体代码`<input type="text" :value="msg" @input="msg=$event.target.value" />`
    * 满足上述代码的情况其实就可以改写成`<input type="text" v-model="msg"/>`
    * 总结要在一个组件里实现v-model，首先要接受这个value，其次要触发它的inpout事件

> 练习
* 处理v-model
    * 在App.vue中，组件input这么使用`<gqf-input placeholder="请输入点信息" v-model="msg"></gqf-input>`
    * 首先需要明确的是，v-model相当于就是给了个绑定属性:value='msg'及@input
    * 所以在子组件的时候我们需要在props接受这2个参数
    * input事件需要通过emit去改变父组件的值
    * 具体代码如下
        ```vue
        <template>
        <div class="gqf-input">
            <input 
                class="gqf-input__inner" 
                :class="{'is-disabled': disabled}" 
                :type="type" 
                :placeholder="placeholder" 
                :name="name" 
                :disabled="disabled" 
                :value = "value"
                @input = "handleInput"
            />
        </div>
        </template>

        <script>
        export default {
            name: 'GqfInput',
            props: {
                placeholder: {
                    type: String,
                    default: ''
                },
                name: {
                    type: String,
                    default: ''
                },
                type: {
                    type: String,
                    default: 'text'
                },
                disabled: {
                    type: Boolean,
                    default: false
                },
                value: {
                    type: String,
                    default: ''
                }
            },
            methods: {
                handleInput (e) {
                    this.$emit('input', e.target.value)
                }
            }
        }
        </script>

        <style lang="scss">
        .gqf-input {
            width: 100%;
            position: relative;
            font-size: 14px;
            display: inline-block;
            .gqf-input__inner {
                -webkit-appearance: none;
                background-color: #fff;
                background-image: none;
                border-radius: 4px;
                border: 1px solid #dcdfe6;
                box-sizing: border-box;
                color: #606266;
                display: inline-block;
                font-size: inherit;
                height: 40px;
                line-height: 40px;
                outline: none;
                padding: 0 15px;
                transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.344, 1);
                width: 100%;
            }
            &:focus {
                outline: none;
                border-color: #409eff;
            }
            & .is-disabled {
                background-color: #f5f7fa;
                border-color: #e4e7ed;
                color: #c0c4cc;
                cursor: not-allowed;
            }
        }
        </style>

        ```

> 知道你还不过瘾继续吧       

* [上一节-input组件-基本结构与常用的属性](../14-input组件-基本结构与常用的属性/input组件-基本结构与常用的属性.md)
* [下一节-input组件-清空value值的功能](../16-input组件-清空value值的功能/input组件-清空value值的功能.md)
* [返回目录](../../README.md)