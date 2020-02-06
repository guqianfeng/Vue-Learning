<template>
  <div class="gqf-input">
    <input class="gqf-input__inner" :class="{'is-disabled': disabled}" :type="type" :placeholder="placeholder" :name="name" :disabled="disabled" :value = "value"
    @input = "handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'GqfInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.gqf-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .gqf-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.344, 1);
    width: 100%;
  }
  &:focus {
    outline: none;
    border-color: #409eff;
  }
  & .is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>
