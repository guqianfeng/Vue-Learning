<template>
  <button class="gqf-button" :class="[`gqf-button--${type}`]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'GqfButton',
  // props: ['type'],
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  created () {
    console.log(this.type)
  }
}
</script>

<style lang="scss" scoped>
.gqf-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409cff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.gqf-button--primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background-color: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.gqf-button--success{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background-color: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.gqf-button--info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background-color: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.gqf-button--warning{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background-color: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.gqf-button--danger{
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background-color: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
</style>
