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

import axios from 'axios'
// console.log(axios)

export default {
    data(){
        return {
            users: []
        }
    },
    async created(){
        let res = await axios({
            url: "/api/users?sort=desc"
        });
        // console.log(res.data);
        this.users = res.data;
    }
}
</script>