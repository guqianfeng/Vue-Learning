<template>
    <ul>
        <li v-for="item in pages" :key="item" :class="{current: item == page}" @click="changePage(item)">
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    props: ["page", "pages"],
    methods: {
        changePage(page){
            // console.log(page)
            this.$router.push({
                name: "user",
                query: {
                    page
                }
            })
        }
    }
}
</script>

<style scoped>
    ul,li{
        list-style: none;
    }
    li{
        display: inline-block;
        border: 1px solid #000;
        margin: 5px;
        padding: 5px 10px;
        cursor: pointer;
    }
    li.current{
        background-color: skyblue;
        cursor: default;
    }
</style>