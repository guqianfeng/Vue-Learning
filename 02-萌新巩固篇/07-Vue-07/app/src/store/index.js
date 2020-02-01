import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    n: 0,
    users: [] 
  },
  getters: {
    young(state){
      return function(age = 20){
        return state.users.filter(user => user.age <= age);
      }
    }
  },
  mutations: {
    changeN(state, payload){
      //第一个参数默认就是state，第二个参数作为需要修改的值
      state.n = payload;
    },
    async getUsers(state, sort){
      let res = await api.getUsers(sort);
      state.users = res.data;
    },
    async addUser(state, payload){
      state.users.unshift(payload)
    },
    async deleteUser(state, id){
      let res = await api.deleteUser(id);
      if(res.data.code == 1){
        state.users = state.users.filter(user => user.id != id);
      }
    }
  },
  actions: {
    async addUser(store, payload){
      //首先action中第一个参数是store，和mutation第一个参数state是不同的
      let res = await api.addUser(payload);
      // console.log(res.data.user);
      if(res.data.code == 1){
        store.commit("addUser", res.data.user);
      }
      return res;     
    },
  },
  modules: {
  }
})
