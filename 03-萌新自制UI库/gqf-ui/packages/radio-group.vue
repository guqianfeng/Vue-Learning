<template>
  <div class="gqf-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GqfRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>

</style>
