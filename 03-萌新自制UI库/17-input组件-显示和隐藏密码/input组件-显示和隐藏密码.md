# 17-显示和隐藏密码

> 练习

* 处理显示和隐藏密码
    * 首先这个真相就是改变type，但type其实是父级传进来的，也不方便去改父级
    * 所以子组件，设置个data，用个passwordVisible，初始值为false
        ```js
        data () {
            return {
                passwordVisible: false
            }
        },        
        ```
    * 然后处理下图标眼睛，加点击事件`@click="handlePassword"`
        ```js
        handlePassword () {
            this.passwordVisible = !this.passwordVisible
        }        
        ```
    * 最后处理下模板，这边的模板处理非常巧妙，代码如下  
        ```
        :type="showPassword ? (passwordVisible? 'text' : 'password') : type"
        ```  
    * 上述代码是2个三目嵌套，简单的说就是
        * 如果传了不需要显示密码，那就直接用type赋值
        * 如果需要显示密码的功能，那就通过passwordVisible去控制 
        * passwordVisible指的是密码是否可见，所以true为可见，那type就改为text，否则改为password  

    * 进一步优化，如果显示密码，可以让小图标亮起来
        * 先写个简单的样式  
            ```css
            i.fa-eye-active {
                color: blue;
            }            
            ```
        * 然后动态添加class，`:class="{'fa-eye-active': passwordVisible}"`   

> 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-16-input组件-清空value值的功能](../16-input组件-清空value值的功能/input组件-清空value值的功能.md)
* [上一节-18-switch组件-开关自定义颜色](../18-switch组件-开关自定义颜色/switch组件-开关自定义颜色.md)