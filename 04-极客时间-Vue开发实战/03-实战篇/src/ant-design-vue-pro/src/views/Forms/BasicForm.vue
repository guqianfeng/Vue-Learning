<template>
  <a-form :layout="formLayout">
    <a-form-item
      label="Form Layout"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-radio-group default-value="horizontal" @change="handleFormLayoutChange">
        <a-radio-button value="horizontal">
          Horizontal
        </a-radio-button>
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="inline">
          Inline
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      label="Field A"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      :validateStatus="fieldAStatus"
      :help="fieldAHelp"
      
    >
      <a-input placeholder="input placeholder" v-model="fieldA"/>
    </a-form-item>
    <a-form-item
      label="Field B"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      
    >
      <a-input placeholder="input placeholder" v-model="fieldB"/>
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="handleSubmit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      fieldA: '',
      fieldAStatus: '',
      fieldAHelp: '',
      fieldB: ''
    };
  },
  watch: {
    fieldA (val) {
      // console.log(val)
      if (val.length <= 5) {
        this.fieldAStatus = "error"
        this.fieldAHelp = "必须大于5个字符"
      } else {
        this.fieldAStatus = ""
        this.fieldAHelp = ""
      }
    }
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handleSubmit () {
      // console.log(this.fieldA, this.fieldB)
      if (this.fieldA.length <= 5) {
        this.fieldAStatus = "error"
        this.fieldAHelp = "必须大于5个字符"
      } else {
        console.log({
          fieldA: this.fieldA,
          fieldB: this.fieldB
        })
      }
    }
  },
};
</script>