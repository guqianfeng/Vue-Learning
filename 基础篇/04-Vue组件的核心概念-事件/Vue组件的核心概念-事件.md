# Vue组件的核心概念-事件

> 知识大纲
1. 普通事件
    * @click，@input，@change，@xxx等事件，通过this.$emit("xxx", ...)触发
2. 修饰符事件
    * @input.trim，@click.stop，@submit.prevent等，一般用于原生的html，自定义组件需要自行开发支持
    
> 练习
* 直接先上代码
    1. 新写个Event组件
        ```vue
        <template>
            <div>
                name: {{name || "--"}}
                <br>
                <input type="text" :value="name" @change="handleChange">
                <div @click="handleDivClick">
                    <button @click="handleClick">重置成功</button>
                    <button @click.stop="handleClick">重置失败</button>
                </div>
            </div>
        </template>
        
        <script>
            export default {
                name: "Event",
                props:{
                    name: String
                },
                methods:{
                    handleChange(e){
                        this.$emit("change", e.target.value)
                    },
                    handleDivClick(){
                        this.$emit("change", "");
                    },
                    handleClick(){
                        //都会失败
                        //e.stopPropagation
                    }
                }
            }
        </script>
        
        <style scoped>
        
        </style>
        ```  
    2. 在App.vue中的代码
        ```vue
        <template>
            <div id="app">
                <Event :name="name" @change="handleEventChange"></Event>
            </div>
        </template>
        
        <script>
            import Event from './components/Event.vue'
        
            export default {
                name: 'app',
                data() {
                    return {
                        name: "test"
                    }
                },
                methods: {
                    handleEventChange(val){
                        this.name = val;
                    }
                },
                components: {
                    Event
                }
            }
        </script>
        
        <style>
            /*#app {
                font-family: 'Avenir', Helvetica, Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-align: center;
                color: #2c3e50;
                margin-top: 60px;
            }*/
        </style>

        ```     