<template>
    <div>
        <h1>用户列表</h1>
        <page :page="page" :pages="pages"></page>
        <select @change="changeSort" v-model="sort">
            <option value="desc">年龄从大到小</option>
            <option value="asc">年龄从小到大</option>
        </select>
        <ul>
            <li v-for="user in users" :key="user.id" style="margin: 20px 0">
                {{user.id}} - <router-link :to="'/detail/'+user.id">{{user.name}}</router-link> - {{user.age | showAge}}
                <button @click="showTip(user.id, $event)" :disabled="tip.isShow">click</button>
            </li>
        </ul>
        <div class="tip" :style="{top: tip.t ,left: tip.l}" v-show="tip.isShow" @click="tip.isShow = false">
            <Detail :id="tip.id" v-if="tip.isShow"></Detail>
        </div>
    </div>
</template>

<script>

import api from '@/api/index.js'

import filter from '@/filter/index.js'

import Page from '@/components/Page'

import Detail from '@/views/Detail'

export default {
    data(){
        return {
            users: [],
            sort: "desc",
            page: 2, //当前第几页
            pages: 10, //一共几页
            tip: {
                id: 0,
                l: 0 + 'px',
                t: 0 + 'px',
                isShow: false
            }
        }
    },
    components: {
        Page,
        Detail
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
        },
        showTip(id, e){
            this.tip.isShow = true;
            // console.log(e.target.getBoundingClientRect())
            let {x, y} = e.target.getBoundingClientRect();
            this.tip.l = x + e.target.offsetWidth + "px";
            this.tip.t = y + "px";
            this.tip.id = id;
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
<style scoped>
.tip{
    position: fixed;
    border: 1px solid black;
    padding: 10px;
}
</style>