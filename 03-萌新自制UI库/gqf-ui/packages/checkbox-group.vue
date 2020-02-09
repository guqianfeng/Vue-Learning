<template>
  <div class="gqf-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GqfCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>
