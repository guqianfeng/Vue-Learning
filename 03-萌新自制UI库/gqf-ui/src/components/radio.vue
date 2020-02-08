<template>
  <label class="gqf-radio" :class="{'is-checked': label === model}">
    <span class="gqf-radio__input">
      <span class="gqf-radio__inner"></span>
      <input type="radio" class="gqf-radio__original" :name="name" :value="label" v-model="model">
    </span>
    <span class="gqf-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'GqfRadio',
  // created () {
  //   console.log(this.$parent)
  // },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        // return this.value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (val) {
        // this.$emit('input', val)
        this.isGroup ? this.RadioGroup.$emit('input', val) : this.$emit('input', val)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.gqf-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .gqf-radio__input {
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .gqf-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .gqf-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .gqf-radio__lable {
    font-size: 14px;
    padding-left: 10px;
  }
}

.gqf-radio.is-checked {
  .gqf-radio__input {
    .gqf-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .gqf-radio__label {
    color: #409eff;
  }
}
</style>
