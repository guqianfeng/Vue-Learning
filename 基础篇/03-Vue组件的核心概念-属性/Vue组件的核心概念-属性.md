# Vue组件的核心概念-属性

> 知识大纲
1. 组件是什么?
    * 小型的一个一个独立的模块
    * 一个页面就是由一个个模块组成  
    * Vue组件 = Vue实例 = new Vue(options) 
2. 三大核心概念
    1. 属性 - 本章主要学习这个
    2. 事件
    3. 插槽    
3. 属性
    1. 自定义属性 -  **props**
        * 组件props中声明的属性
    2. 原生属性 -  **attrs**
        * 没有声明的属性，默认自动挂载到组件根元素上，设置inheritAttrs为false可以关闭自动挂载
    3. 特殊属性 -  **class,style**     
        * 挂载到组件根元素上，支持字符串对象数组等多种语法
        
> 练习
* 属性练习
    1. `props: ["name", "type", "list", "isVisible"]`,平时开发开发中不推荐这么使用
    2. 推荐的方式，代码如下
        ```
        props: {
            name: String,
            type: {
                validator: function(value){
                    //这个值必须匹配下列字符串一个
                    return ["success", "warning", "danger"].includes(value);
                }
            },
            list: {
                type: Array,
                //对象或数组默认值必须从一个工厂函数获取
                default: () => []
            },
            isVisible:{
                type: Bollean,
                default: false, //就算不写Vue也会初始化个默认值
            },
            onChange: {  //不推荐使用onChange这种命名
                type: Function,
                default: () => {}
            }
        },
        methods: {
            handleClick(){
                //不要这么做，不要这么做，不要这么做
                //this.type = "warning";
                
                //可以还可以更好
                this.onChange(this.type === "success" ? "warning" : "success");
            }，
           
        }
        ```
    3. 使用的方式
        ```vue
           <Props 
               name="Hello Vue"
               :type="type"
               :is-visible="false"
               :on-change="handlePropChange"
               title="属性Demo"
               class="test1"
               :class="['test2']"
               :style="{ marginTop: '20px' }"
               style="margin-top: 10px"
           />
        ```           