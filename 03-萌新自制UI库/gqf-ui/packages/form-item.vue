<template>
  <div class="gqf-form-item">
    <label class="gqf-form-item__label" :style="{width: Form.labelWidth}">{{label}}</label>
    <div class="gqf-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GqfFormItem',
  inject: ['Form'],
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.gqf-form-item {
  margin-bottom: 25px;
  .gqf-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .gqf-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
