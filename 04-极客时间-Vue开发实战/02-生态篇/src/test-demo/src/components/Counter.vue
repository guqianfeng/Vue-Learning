<template>
  <div>
    <span>{{ count }}</span>
    <button @click="clickHandle">count++</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    clickHandle () {
      this.count++;
      this.$emit('click', this.count)
    }
  }
}
</script>

<style>

</style>