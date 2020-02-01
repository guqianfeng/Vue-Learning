<template>
  <div>
      <input type="text" ref="nameInput" placeholder="username"><button @click="addUser">add user</button>
      <ul>
          <li v-for="user in young" :key="user.id">
              {{user.name}} - {{user.age}} - <button @click="deleteUser(user.id, user.name)">delete user</button>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    // computed: {
    //     users(){
    //         return this.$store.state.users;
    //     },
    //     n(){
    //         return this.$store.state.n;
    //     }
    // },
    computed: {
        ...mapState(["n"]),
        young(){
            return this.$store.getters.young(100);
        }
    },
    async created(){
        this.$store.commit("getUsers", "asc");
    },
    methods: {
        async addUser(){
            this.$store.commit("changeN", Math.random() * 100 | 0);
            let name = this.$refs.nameInput.value;
            if(!name){
                alert("名字不能为空")
                return;
            }
            let res = await this.$store.dispatch("addUser", {
                name,
                age: Math.random() * 100 | 0
            })
            console.log(res); //试图拿res
            this.$refs.nameInput.value = "";
        },
        deleteUser(id, name){
            let flag = window.confirm(`确认删除${name}吗`);
            if(flag){
                this.$store.commit("deleteUser", id)
            }
            
        }
    }
}
</script>

<style scoped>
    li{
        margin: 10px;
    }
</style>