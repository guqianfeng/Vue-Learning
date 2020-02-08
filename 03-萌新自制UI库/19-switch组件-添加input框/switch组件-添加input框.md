# 19-switch组件-添加input框

> 知识大纲
* 添加复选框
    * 模板(放在div下和span平级)
        ```
        <input class="gqf-switch__input" type="checkbox" :name="name" ref="input"/>
        ```
    * 样式(和gqf-switch__core是平级的)
        ```scss
        .gqf-switch__input {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
            margin: 0;
        }        
        ```

> 练习

* name属性
    * 实际上用户操作swtich还是希望有name属性，需要有个checkbox的复选框
    * App.vue中父组件先传个name属性
    * 子组件接收name
    * 模板中添加复选框，复制知识大纲的模板和样式
    * 在mounted和点击中，给复选框checked复制`this.$refs.input.checked = this.value`
    * 这边其实我们可以通过把样式注释掉，看下checkbox是否被选中

> 知道你还不过瘾继续吧       

* [上一节-18-switch组件-开关自定义颜色](../18-switch组件-开关自定义颜色/switch组件-开关自定义颜色.md)
* [下一节-20-radio组件-基本结构](../20-radio组件-基本结构/radio组件-基本结构.md)
* [返回目录](../../README.md)