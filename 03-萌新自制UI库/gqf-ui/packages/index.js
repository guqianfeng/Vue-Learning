// 整个包的入口
// 定义install方法，接受Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Form from './form'
import FormItem from './form-item'
import './font-awesome-4.7.0/scss/font-awesome.scss'

const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]
const install = function (Vue) {
  // console.log('helo GqfUI')
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
