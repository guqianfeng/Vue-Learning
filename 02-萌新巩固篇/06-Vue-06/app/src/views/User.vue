<template>
    <div>
        <h1>用户列表</h1>
        <page :page="page" :pages="pages"></page>
        <select @change="changeSort" v-model="sort">
            <option value="desc">年龄从大到小</option>
            <option value="asc">年龄从小到大</option>
        </select>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{user.id}} - <router-link :to="'/detail/'+user.id">{{user.name}}</router-link> - {{user.age | showAge}}
            </li>
        </ul>
    </div>
</template>

<script>

import api from '@/api/index.js'

import filter from '@/filter/index.js'

import Page from '@/components/Page'

export default {
    data(){
        return {
            users: [],
            sort: "desc",
            page: 2, //当前第几页
            pages: 10, //一共几页
        }
    },
    components: {
        Page
    },
    methods: {
        changeSort(){
            this.$router.push({
                name: "user",
                query: {
                    sort: this.sort,
                    page: this.page,
                }
            })
        },
        async getUsers(){
            this.sort = this.$route.query.sort || "desc";
            this.page = this.$route.query.page || 1;
            let res = await api.getUsers(this.sort);
            this.users = res.data;
        }
    },
    // async created(){
    //     this.getUsers();
    // },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.getUsers();
        })
    },
    beforeRouteUpdate(to, from, next){
        //注意不能再next之前调用this.getUsers
        next();
        this.getUsers();
    },
    filters: {
        showAge: filter.showAge,
    },
/*     watch: {
        async $route(){
            this.getUsers();
        }
    } */
}
</script>