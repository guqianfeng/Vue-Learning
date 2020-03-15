<template>
    <li>
        <slot name="pre-icon" :val="value"></slot>
        <span v-if="!del">{{title}}</span>
        <span v-else style="text-decoration: line-through;">{{title}}</span>
        <slot name="suf-icon">哈哈</slot>
        <button v-show="!del" @click="deleteHandle">删除</button>
    </li> 
</template>

<script>
export default {
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        deleteHandle () {
            this.$emit('delete', this.title)
        }
    },
    data () {
        return {
            value: Math.random()
        }
    }    
}
</script>

<style scoped>

</style>