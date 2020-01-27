<template>
    <div>
        <h1>详情</h1>
        <template v-if="user">
            <p>id - {{user.id}}</p>
            <p>name - {{user.name}}</p>
            <p>age - {{user.age | showAge}}</p>
        </template>
        <template v-else>
            没有该用户信息
        </template>
    </div>
</template>

<script>

import api from '@/api/index'
import filter from '@/filter/index'

export default {
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
        let id = this.$route.params.id;
        let res = await api.getUserById(id);
        // console.log(res.data);
        this.user = res.data;
    }
}
</script>