<template>
  <div class="gqf-input" :class="{'gqf-input--suffix': showSuffix}">
    <input class="gqf-input__inner" :class="{'is-disabled': disabled}" :type="showPassword ? (passwordVisible? 'text' : 'password') : type" :placeholder="placeholder" :name="name" :disabled="disabled" :value = "value"
    @input = "handleInput"
    />
    <span class="gqf-input__suffix" v-if="showSuffix"><i class="fa fa-close" v-if="clearable && value" @click="clear"></i><i class="fa fa-eye" :class="{'fa-eye-active': passwordVisible}" v-if="showPassword" @click="handlePassword"></i></span>
  </div>
</template>

<script>
export default {
  name: 'GqfInput',
  data () {
    return {
      passwordVisible: false
    }
  },
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
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
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

.gqf-input--suffix {
  .gqf-input__inner {
    padding-right: 30px;
  }
  .gqf-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645, .045, .355, 1);
    }
    i.fa-eye-active {
      color: blue;
    }
  }
}
</style>
