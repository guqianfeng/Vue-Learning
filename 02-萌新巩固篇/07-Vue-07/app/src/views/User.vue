<template>
  <div>
      <input type="text" ref="nameInput"><button @click="addUser">add user</button>
      <h1>User - {{n}} - {{$store.state.n}}</h1>
      <ul>
          <li v-for="user in young" :key="user.id">
              {{user.name}} - {{user.age}} - <button @click="deleteUser(user.id)">delete user</button>
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
        addUser(){
            this.$store.commit("changeN", Math.random() * 100 | 0);
            let name = this.$refs.nameInput.value;
            if(!name){
                alert("名字不能为空")
                return;
            }
            // this.$store.commit("addUser", {
            //     id: Date.now(),
            //     name,
            //     age: Math.random() * 100 | 0
            // })
            this.$store.commit("addUser", {
                name,
                age: Math.random() * 100 | 0
            })
            this.$refs.nameInput.value = "";
        },
        deleteUser(id){
            this.$store.commit("deleteUser", id)
        }
    }
}
</script>

<style>

</style>