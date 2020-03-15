<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <todo-list>
      <todo-item 
          v-for="item in list" 
          :title="item.title" 
          :del="item.del"
          @delete="deleteItem"
          :key="item.title"
      >
          <template v-slot:pre-icon="{val}">
              前置图标 - {{val}}
          </template>
          <!-- <template v-slot:suf-icon>
              后置图标
          </template> -->
      </todo-item>
  </todo-list>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    TodoList,
    TodoItem
  },
  data () {
    return {
      message: 'hello world',
      list: [
          {
              title: '课程1',
              del: false
          },
          {
              title: '课程2',
              del: true
          },
      ]
    }
  },
  methods: {
      deleteItem (title) {
        alert('delete ' + title)
      }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
