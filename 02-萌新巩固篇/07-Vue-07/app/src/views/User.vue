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
    computed: {
        users(){
            return this.$store.state.users;
        },
        n(){
            return this.$store.state.n;
        }
    },
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
}
</script>

<style>

</style>