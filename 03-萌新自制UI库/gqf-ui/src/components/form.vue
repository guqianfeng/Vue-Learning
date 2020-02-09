<template>
  <div class="gqf-form">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GqfForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>

<style>
</style>
