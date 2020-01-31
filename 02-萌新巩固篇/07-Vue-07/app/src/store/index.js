import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
  mutations: {
    changeN(state, payload){
      //第一个参数默认就是state，第二个参数作为需要修改的值
      state.n = payload;
    },
    addUser(state, payload){
      state.users = [payload, ...state.users];
    }
  },
  actions: {
  },
  modules: {
  }
})
