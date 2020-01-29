# Vue-06

> 知识大纲

* 路由组件传参
    * 我们通常把路由直接映射绑定的组件称为路由组件，也只有路由才能直接调用路由有关对象：$router，$route
    * 当我们一个组件即希望作为路由使用，又可能作为功能组件(某个页面中的一部分)去使用，这个时候路由组件传参的方式来做到这点

> 练习

* 分页 - 上次做了个用户列表，这次我们接着完善功能，做个分页
    * 分页应该是个功能组件，所以我们在component新建个组件Page，先简单随意的布局下
        ```vue
        <template>
            <ul>
                <li class="current">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </template>

        <style scoped>
            ul,li{
                list-style: none;
            }
            li{
                display: inline-block;
                border: 1px solid #000;
                margin: 5px;
                padding: 5px 10px;
                cursor: pointer;
            }
            li.current{
                background-color: skyblue;
                cursor: default;
            }
        </style>        
        ```
    * 然后在User组件中import，并且放在components属性，然后在页面中使用page标签
        ```vue
        <template>
            <div>
                <h1>用户列表</h1>
                <page></page>
                <select @change="changeSort" v-model="sort">
                    <option value="desc">年龄从大到小</option>
                    <option value="asc">年龄从小到大</option>
                </select>
                <ul>
                    <li v-for="user in users" :key="user.id">
                        {{user.id}} - <router-link :to="'/detail/'+user.id">{{user.name}}</router-link> - {{user.age | showAge}}
                    </li>
                </ul>
            </div>
        </template>

        <script>

        import api from '@/api/index.js'

        import filter from '@/filter/index.js'

        import Page from '@/components/Page'

        export default {
            data(){
                return {
                    users: [],
                    sort: "desc",
                }
            },
            components: {
                Page
            },
            methods: {
                changeSort(){
                    this.$router.push({
                        name: "user",
                        query: {
                            sort: this.sort
                        }
                    })
                },
                async getUsers(){
                    this.sort = this.$route.query.sort || "desc";
                    let res = await api.getUsers(this.sort);
                    this.users = res.data;
                }
            },
            // async created(){
            //     this.getUsers();
            // },
            beforeRouteEnter(to, from, next){
                next(vm => {
                    vm.getUsers();
                })
            },
            beforeRouteUpdate(to, from, next){
                //注意不能再next之前调用this.getUsers
                next();
                this.getUsers();
            },
            filters: {
                showAge: filter.showAge,
            },
        /*     watch: {
                async $route(){
                    this.getUsers();
                }
            } */
        }
        </script>        
        ```
    * 此时页面的效果是这样的

        ![](./images/page组件.jpg) 

    * 接着我们应该封装优化下，比如在User组件中，应该传给Page组件一共多少页，当前在第几页   
        ```js
        data(){
            return {
                users: [],
                sort: "desc",
                page: 2, //当前第几页
                pages: 10, //一共几页
            }
        },        
        ```
    * 所以page标签应该是这样写的`<page :page="page" :pages="pages"></page>`        
    * 回到page组件，props接受，然后循环判断
        ```vue
        <template>
            <ul>
                <li v-for="item in pages" :key="item" :class="item === page ? 'current': ''">
                    {{item}}
                </li>
            </ul>
        </template>

        <script>
        export default {
            props: {
                page: {
                    type: Number,
                    default: 1,
                },
                pages: {
                    type: Number,
                    required: true,
                }
            }
        }
        </script>

        <style scoped>
            ul,li{
                list-style: none;
            }
            li{
                display: inline-block;
                border: 1px solid #000;
                margin: 5px;
                padding: 5px 10px;
                cursor: pointer;
            }
            li.current{
                background-color: skyblue;
                cursor: default;
            }
        </style>        
        ```
    * 此时页面的呈现结果是

        ![](./images/page组件传值.jpg)     

    * 接着我们个Page组件添加点击事件
        ```js
        changePage(page){
            // console.log(page)
            this.$router.push({
                name: "user",
                query: {
                    page
                }
            })
        }        
        ``` 
    * User组件这边也要做下相应的处理，比如
        ```js
        methods: {
            changeSort(){
                this.$router.push({
                    name: "user",
                    query: {
                        sort: this.sort,
                        page: this.page,
                    }
                })
            },
            async getUsers(){
                this.sort = this.$route.query.sort || "desc";
                this.page = this.$route.query.page || 1;
                let res = await api.getUsers(this.sort);
                this.users = res.data;
            }
        },        
        ```  
    * 然后就能感受点哪，哪亮的快感，并且url也会随之变化

        ![](./images/点哪哪亮.png)  

* 弹出框 - 点击名字会跳转详情，现在在名字边上做个按钮，希望点击按钮能看到个详情的弹出框   
    * 先简单布局下，将弹出层展示在按钮的右侧
        ```vue
        <template>
            <div>
                <h1>用户列表</h1>
                <page :page="page" :pages="pages"></page>
                <select @change="changeSort" v-model="sort">
                    <option value="desc">年龄从大到小</option>
                    <option value="asc">年龄从小到大</option>
                </select>
                <ul>
                    <li v-for="user in users" :key="user.id" style="margin: 20px 0">
                        {{user.id}} - <router-link :to="'/detail/'+user.id">{{user.name}}</router-link> - {{user.age | showAge}}
                        <button @click="showTip">click</button>
                    </li>
                </ul>
                <div class="tip" :style="{top: tip.t ,left: tip.l}" v-show="tip.isShow" @click="tip.isShow = false">
                    test
                </div>
            </div>
        </template>

        <script>

        import api from '@/api/index.js'

        import filter from '@/filter/index.js'

        import Page from '@/components/Page'

        export default {
            data(){
                return {
                    users: [],
                    sort: "desc",
                    page: 2, //当前第几页
                    pages: 10, //一共几页
                    tip: {
                        l: 0 + 'px',
                        t: 0 + 'px',
                        isShow: false
                    }
                }
            },
            components: {
                Page
            },
            methods: {
                changeSort(){
                    this.$router.push({
                        name: "user",
                        query: {
                            sort: this.sort,
                            page: this.page,
                        }
                    })
                },
                async getUsers(){
                    this.sort = this.$route.query.sort || "desc";
                    this.page = this.$route.query.page || 1;
                    let res = await api.getUsers(this.sort);
                    this.users = res.data;
                },
                showTip(e){
                    this.tip.isShow = true;
                    console.log(e.target.getBoundingClientRect())
                    let {x, y} = e.target.getBoundingClientRect();
                    this.tip.l = x + e.target.offsetWidth + "px";
                    this.tip.t = y + "px";
                }
            },
            // async created(){
            //     this.getUsers();
            // },
            beforeRouteEnter(to, from, next){
                next(vm => {
                    vm.getUsers();
                })
            },
            beforeRouteUpdate(to, from, next){
                //注意不能再next之前调用this.getUsers
                next();
                this.getUsers();
            },
            filters: {
                showAge: filter.showAge,
            },
        /*     watch: {
                async $route(){
                    this.getUsers();
                }
            } */
        }
        </script>
        <style scoped>
        .tip{
            position: fixed;
            border: 1px solid black;
            padding: 10px;
        }
        </style>        
        ```           

    * 此时的效果应该就是点击按钮后，在右侧出现个div，点击div，弹出层消失

        ![](./images/弹出层.jpg)

    * 其实我们弹出层是想展示我们的Detail视图组件的，但Detail需要一个id，所以我们这边可以接着这样来处理，给tip传id就可以了
    * 所以在一开始循环遍历按钮的时候我们可以传入id
        ```
        <ul>
            <li v-for="user in users" :key="user.id" style="margin: 20px 0">
                {{user.id}} - <router-link :to="'/detail/'+user.id">{{user.name}}</router-link> - {{user.age | showAge}}
                <button @click="showTip(user.id, $event)" :disabled="tip.isShow">click</button>
            </li>
        </ul>
        ```  
    * 那么showTip方法就需要改造下，给tip加上id
        ```js
        showTip(id, e){
            this.tip.isShow = true;
            // console.log(e.target.getBoundingClientRect())
            let {x, y} = e.target.getBoundingClientRect();
            this.tip.l = x + e.target.offsetWidth + "px";
            this.tip.t = y + "px";
            this.tip.id = id;
        }        
        ``` 
    * 接着引入我们的Detail视图组件，可以把tip.id传入
        ```
        <div class="tip" :style="{top: tip.t ,left: tip.l}" v-show="tip.isShow" @click="tip.isShow = false">
            <Detail :id="tip.id" v-if="tip.isShow"></Detail>
        </div>        
        ``` 
    * 最后在回到我们的Detail视图组件，接收传入的id，并且在渲染的时候加上id的判断 
        ```vue
        <template>
            <div>
                <h1>详情</h1>
                <template v-if="user">
                    <p>id - {{user.id}}</p>
                    <p>name - {{user.name}}</p>
                    <p>age - {{user.age | showAge}}</p>
                </template>
                <template v-else>
                    
                </template>
            </div>
        </template>

        <script>

        import api from '@/api/index'
        import filter from '@/filter/index'

        export default {
            props: ["id"],
            data(){
                return {
                    user: null
                }
            },
            filters: {
                showAge: filter.showAge
            },
            async created(){
                // console.log(this.$route)
                console.log(this.id);
                let id = this.$route.params.id || this.id;
                let res = await api.getUserById(id);
                // console.log(res.data);
                this.user = res.data;
            }
        }
        </script>        
        ```  
    * 此时页面的效果就出来了

        ![](./images/弹出层最终效果.png)             


> 知道你还不过瘾继续吧     

* [返回目录](../../README.md) 