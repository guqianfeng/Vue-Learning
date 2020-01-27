<template>
    <div>
        <h1>用户列表</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{user.id}} - {{user.name}} - {{user.age}}
            </li>
        </ul>
    </div>
</template>

<script>

import api from '@/api/index.js'

export default {
    data(){
        return {
            users: []
        }
    },
    async created(){
        let res = await api.getUsers();
        this.users = res.data;
        console.log("created", this.users)

        let test = await api.getUserById(1);
        console.log(test.data);

        console.log(this.$http)
    }
}
</script>