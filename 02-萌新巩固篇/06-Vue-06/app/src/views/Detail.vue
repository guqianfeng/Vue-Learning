<template>
    <div>
        <h1>详情</h1>
        <template v-if="user">
            <p>id - {{user.id}}</p>
            <p>name - {{user.name}}</p>
            <p>age - {{user.age | showAge}}</p>
        </template>
        <template v-else>
            
        </template>
    </div>
</template>

<script>

import api from '@/api/index'
import filter from '@/filter/index'

export default {
    props: ["id"],
    data(){
        return {
            user: null
        }
    },
    filters: {
        showAge: filter.showAge
    },
    async created(){
        let id = this.id;
        let res = await api.getUserById(id);
        this.user = res.data;
    }
}
</script>