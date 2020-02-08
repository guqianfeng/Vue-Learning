# 12-dialog组件-使用过渡实现动画效果

> 知识大纲

* transition组件 - 需要设置个name
* 动画的实现 - 两种方式
    * 给六个类名分别添加样式
    * 设置个动画样式，给2个类名添加样式

> 练习

* 添加transition组件包住wrap，给个属性名name，取名为dialog-fade，`<transition name="dialog-fade">`
* 添加样式即可
    ```css
    .dialog-fade-enter-active {
        animation: fade .3s;
    }

    .dialog-fade-leave-active {
        animation: fade .3s reverse;
    }

    @keyframes fade {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }    
    ```

> 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-11-dialog组件-sync修饰符的使用](../11-dialog组件-sync修饰符的使用/dialog组件-sync修饰符的使用.md)
* [下一节-13-dialog组件-涉及到的深度选择器](../13-dialog组件-涉及到的深度选择器/dialog组件-涉及到的深度选择器.md)