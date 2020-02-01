# Vue-07

> 准备工作

* 这次用脚手架新建项目，记得要选中router和vuex

> 知识大纲

* 为什么要使用vuex
    * 多个组件共享状态
        * 多层级父子组件状态传递会特别繁琐
        * 非嵌套父子组件状态传递也会特别繁琐

* vuex
    * Vuex是一个专门为Vue.js应用程序开发的状态管理模式，类似redux
    * 这种状态管理模式包含
        * State - 状态数据源
        * View - 使用状态数据源的视图
        * Actions - 修改更新数据源的操作
    * 这种模式遵循的是单向数据流的模式

* vuex的工作流
    * State - 存储应用状态的数据(React中的State)
    * Vue Component - 消费State
    * Actions - 提交修改State的动作(包括异步行为)(React中的action)
    * Mutations - 唯一更改State的位置(React中的Reducer) 

* 使用辅助函数`mapState`
    * 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有一些重复和冗余。为了解决这个问题，我们可以使用`mapState`辅助函数帮我们生成计算属性，通常我们把`store`的`state`通过`mapState`函数映射到组件的`computed`上
    * 具体代码如下 
        ```js
        import {mapState} from 'vuex'
        export default {
            name: 'home',
            computed: mapState([
                "title",
                "content",
            ])
        }
        ```
    * 还可以起别名
        ```js
        computed: mapState({
            "content": content, 
            "subTitle": title, //key值代表起的别名
        })
        ``` 
    * 也可以使用函数的方式 
        ```js
        computed: mapState({
            "content": content, 
            subTitle(state){
                return state.title + " 特殊处理下";
            }
        })
        ``` 
    * 组件中本身有计算属性，且我们也需要用到mapState，使用解构就可以了~
        ```js
        computed: {
            test(){
                return "test";
            },
            ...mapState(["title", "content"])
        }
        ```                     

> 练习

* 了解项目结构
    * 建立好项目后我们能看到store下的index.js
        ```js
        import Vue from 'vue'
        import Vuex from 'vuex'

        Vue.use(Vuex)

        export default new Vuex.Store({
            state: {
            },
            mutations: {
            },
            actions: {
            },
            modules: {
            }
        }) 
        ```
    * 在来看下main.js 
        ```js
        import Vue from 'vue'
        import App from './App.vue'
        import router from './router'
        import store from './store'

        Vue.config.productionTip = false

        new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
        ```   
* 初玩state  
    * 先在store下的index.js，随意写一些默认数据  
        ```js
        import Vue from 'vue'
        import Vuex from 'vuex'

        Vue.use(Vuex)

        export default new Vuex.Store({
        state: {
            users: [
            {
                "id": 1,
                "name": "gqf",
                "age": 28
            },
            {
                "id": 2,
                "name": "张三",
                "age": 12
            },
            {
                "id": 3,
                "name": "李四",
                "age": 40
            },
            {
                "id": 4,
                "name": "王五",
                "age": 35
            },
            {
                "id": 5,
                "name": "赵六",
                "age": 8
            }
            ] 
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
        })
        ```    
    * 新建视图组件User
        ```vue
        <template>
        <div>
            <h1>User</h1>
        </div>
        </template>

        <script>
        export default {
            created(){
                console.log(this.$store.state.users)
            }
        }
        </script>

        <style>

        </style>        
        ```    
    * 添加路由添加超链接这里就不多说了
    * 然后看下页面打印的结果，以及我们调试工具

        ![](./images/初玩vuex控制台打印.jpg)

        ![](./images/初玩vuex调试工具.jpg) 

    * 那接着我们先把数据渲染出来吧    
        ```vue
        <template>
        <div>
            <h1>User</h1>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{user.id}} - {{user.name}} - {{user.age}}
                </li>
            </ul>
        </div>
        </template>

        <script>
        export default {
            data(){
                return {
                    users: []
                }
            },
            created(){
                // console.log(this.$store.state.users)
                this.users = this.$store.state.users
            }
        }
        </script>

        <style>

        </style>        
        ```    

* 修改store的数据  
    * 为了方便演示，我们仓库中在加一个数据
        ```js
        state: {
            n: 0,
            users: [
            {
                "id": 1,
                "name": "gqf",
                "age": 28
            },
            {
                "id": 2,
                "name": "张三",
                "age": 12
            },
            {
                "id": 3,
                "name": "李四",
                "age": 40
            },
            {
                "id": 4,
                "name": "王五",
                "age": 35
            },
            {
                "id": 5,
                "name": "赵六",
                "age": 8
            }
            ] 
        },        
        ```
    * 然后在User组件里这么渲染
        ```vue
        <template>
        <div>
            <h1>User - {{n}} - {{$store.state.n}}</h1>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{user.id}} - {{user.name}} - {{user.age}}
                </li>
            </ul>
        </div>
        </template>

        <script>
        export default {
            data(){
                return {
                    users: [],
                    n: 0,
                }
            },
            created(){
                // console.log(this.$store.state.users)
                this.users = this.$store.state.users
                this.n = this.$store.state.n;
            }
        }
        </script>

        <style>

        </style>        
        ```   
    * 先来个错误演示，直接修改store中的数据
        ```vue
        <template>
        <div>
            <input type="text" ref="nameInput"><button @click="addUser">add user</button>
            <h1>User - {{n}} - {{$store.state.n}}</h1>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{user.id}} - {{user.name}} - {{user.age}}
                </li>
            </ul>
        </div>
        </template>

        <script>
        export default {
            data(){
                return {
                    users: [],
                    n: 0,
                }
            },
            created(){
                // console.log(this.$store.state.users)
                this.users = this.$store.state.users
                this.n = this.$store.state.n;
            },
            methods: {
                addUser(){
                    this.$store.state.n = Math.random() * 100 | 0;
                    let name = this.$refs.nameInput.value;
                    this.$store.state.users.unshift({
                        id: Date.now(),
                        name,
                        age: Math.random() * 100 | 0
                    })
                    this.$refs.nameInput.value = "";
                }
            }
        }
        </script>

        <style>

        </style>        
        ``` 
    * 操作一把看下结果

        ![](./images/错误示范.jpg)  

        ![](./images/错误示范调试工具.jpg) 

    * 注意，数组这边渲染出来了是因为引用传递 
    * 接着正规操作~
    * 先要在仓库里面mutations里添加方法
        ```js
        mutations: {
            changeN(state, payload){
                //第一个参数默认就是state，第二个参数作为需要修改的值
                state.n = payload;
            }
        },        
        ```
    * 接着User.vue里的数据渲染，其实用computed更好，所以把data和created删除
        ```js
        computed: {
            users(){
                return this.$store.state.users;
            },
            n(){
                return this.$store.state.n;
            }
        },        
        ```
    * 然后在添加方法中可以这么调用`this.$store.commit("changeN", Math.random() * 100 | 0)`   
    * 接着我们就可以在页面上操作一下，比如多点几次add，在看下调试工具   

        ![](./images/正确的操作.jpg)    

    * 所以添加用户，我们也是在mutations新增一个方法
        ```js
        addUser(state, payload){
            state.users = [payload, ...state.users];
        }        
        ```
    * 最后在添加方法中这么写就可以了
        ```js
        methods: {
            addUser(){
                this.$store.commit("changeN", Math.random() * 100 | 0);
                let name = this.$refs.nameInput.value;
                this.$store.commit("addUser", {
                    id: Date.now(),
                    name,
                    age: Math.random() * 100 | 0
                })
                this.$refs.nameInput.value = "";
            }
        }        
        ```  
    * 调试工具呈现的结果是 

        ![](./images/添加用户.jpg)    

* 使用辅助函数`mapState` 
    * 直接上代码
        ```js
        // computed: {
        //     users(){
        //         return this.$store.state.users;
        //     },
        //     n(){
        //         return this.$store.state.n;
        //     }
        // },
        computed: mapState(["users", "n"]),        
        ``` 
    * 注释掉的computed和下面的computed效果是一样的，这就是辅助函数的力量~   
    * 实质上mapState最终就是会生成上述我们注释的代码          

> 知道你还不过瘾继续吧       

* [返回目录](../../README.md) 