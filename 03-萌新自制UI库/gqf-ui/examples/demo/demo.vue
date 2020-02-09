<template>
  <div>
    <h1>demo</h1>
    <p>{{money}}</p>
    <div>
      <gqf-button type="primary" @click="changeMoney">click</gqf-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: {
    money: {
      type: Number,
      default: 100
    }
  },
  methods: {
    changeMoney () {
      this.$emit('update:money', 200)
    }
  }
}
</script>
