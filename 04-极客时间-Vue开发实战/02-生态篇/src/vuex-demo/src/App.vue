<template>
  <div id="app">
    {{count}}
    <br/>
    {{$store.getters.doubleCount}}
    <br/>
    <button @click="$store.commit('increment')">increment</button>
    <button @click="$store.dispatch('increment')">increment</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
