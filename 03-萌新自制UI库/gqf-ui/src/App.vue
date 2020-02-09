<template>
  <div id="app">
    <!-- <div class="row">
      <gqf-button @click="fn">按钮</gqf-button>
      <gqf-button type="primary">按钮</gqf-button>
      <gqf-button type="success">按钮</gqf-button>
      <gqf-button type="info">按钮</gqf-button>
      <gqf-button type="warning">按钮</gqf-button>
      <gqf-button type="danger">按钮</gqf-button>
    </div>
    <div class="row">
      <gqf-button plain>按钮</gqf-button>
      <gqf-button plain type="primary">按钮</gqf-button>
      <gqf-button plain type="success">按钮</gqf-button>
      <gqf-button plain type="info">按钮</gqf-button>
      <gqf-button plain type="warning">按钮</gqf-button>
      <gqf-button plain type="danger">按钮</gqf-button>
    </div>
    <div class="row">
      <gqf-button round icon="fa-spinner">按钮</gqf-button>
      <gqf-button round icon="fa-spinner" type="primary">按钮</gqf-button>
      <gqf-button round icon="fa-spinner" type="success">按钮</gqf-button>
      <gqf-button round icon="fa-spinner" type="info">按钮</gqf-button>
      <gqf-button round icon="fa-spinner" type="warning">按钮</gqf-button>
      <gqf-button round icon="fa-spinner" type="danger">按钮</gqf-button>
    </div>
    <div class="row">
      <gqf-button circle>我</gqf-button>
      <gqf-button circle type="primary">梅</gqf-button>
      <gqf-button circle type="success">利</gqf-button>
      <gqf-button circle type="info">奥</gqf-button>
      <gqf-button circle type="warning">猪</gqf-button>
      <gqf-button circle type="danger">猪</gqf-button>
    </div>
    <div class="row">
      <gqf-button disabled>按钮</gqf-button>
      <gqf-button disabled type="primary">按钮</gqf-button>
      <gqf-button disabled type="success">按钮</gqf-button>
      <gqf-button disabled type="info">按钮</gqf-button>
      <gqf-button disabled type="warning">按钮</gqf-button>
      <gqf-button disabled type="danger">按钮</gqf-button>
    </div>
    <div class="row">
      <gqf-button circle icon="fa-camera-retro"></gqf-button>
      <gqf-button circle icon="fa-camera-retro" type="primary"></gqf-button>
      <gqf-button circle icon="fa-camera-retro" type="success"></gqf-button>
      <gqf-button circle icon="fa-camera-retro" type="info"></gqf-button>
      <gqf-button circle icon="fa-camera-retro" type="warning"></gqf-button>
      <gqf-button circle icon="fa-camera-retro" type="danger"></gqf-button>
    </div> -->

    <!-- <gqf-dialog>
      <template v-slot:title>
        <h1>你们的猪大佬</h1>
      </template>
    </gqf-dialog> -->
    <!-- <gqf-button @click="visible=true">按钮</gqf-button> -->

    <!-- <gqf-dialog title="我是梅利奥猪猪" width="60%" top="30px" :visible="visible" @close="close"> -->
    <!-- <gqf-dialog title="我是梅利奥猪猪" width="60%" top="30px" :visible.sync="visible">
      <p>希望自己的练习能给大家带来帮助</p>
      <template v-slot:footer>
        <gqf-button @click="visible = false">取消</gqf-button>
        <gqf-button type="primary" @click="visible = false">确定</gqf-button>
      </template>
    </gqf-dialog> -->

    <!-- <demo :money="money" @update:money="changeMoney"></demo> -->
    <!-- <demo :money.sync="money"></demo> -->
    <!-- <div class="row">
      <gqf-input placeholder="gqf"></gqf-input>
      <gqf-input placeholder="is"></gqf-input>
      <gqf-input placeholder="梅利奥猪猪"></gqf-input>
    </div>
    <div class="row">
      <gqf-input placeholder="username" name="username"></gqf-input>
      <gqf-input placeholder="password" name="username" type="password"></gqf-input>
    </div>
    <div class="row">
      <gqf-input placeholder="禁用" disabled></gqf-input>
    </div>
    <div class="row">
      <gqf-input placeholder="请输入点信息" v-model="msg"></gqf-input>
    </div>
    <div class="row">
      <gqf-input placeholder="测试清空" v-model="msg" clearable></gqf-input>
      <gqf-input placeholder="测试展示密码" type="password" v-model="msg" showPassword></gqf-input>
    </div> -->
    <!-- <div class="row">
      <gqf-switch v-model="active"></gqf-switch>
    </div>
    <div class="row">
      <gqf-switch v-model="active" active-color="red" inactive-color="green" name="username"></gqf-switch>
    </div> -->
    <!-- <div class="row">
      <gqf-radio label="1" v-model="gender"></gqf-radio>
      <gqf-radio label="0" v-model="gender"></gqf-radio>
    </div> -->
    <!-- <div class="row">
      <gqf-radio label="1" v-model="gender" name="gender">男</gqf-radio>
      <gqf-radio label="0" v-model="gender" name="gender">女</gqf-radio>
    </div> -->
    <!-- <div class="row">
      <gqf-radio-group v-model="gender">
        <gqf-radio label="1" name="gender">男</gqf-radio>
        <gqf-radio label="0" name="gender">女</gqf-radio>
      </gqf-radio-group>
    </div> -->
    <!-- <div class="row">
      <gqf-checkbox v-model="active" name="agree">是否同意</gqf-checkbox>
    </div>
    <div class="row">
      <gqf-checkbox-group v-model="hobby">
        <gqf-checkbox label="sleep"></gqf-checkbox>
        <gqf-checkbox label="eat"></gqf-checkbox>
        <gqf-checkbox label="play"></gqf-checkbox>
      </gqf-checkbox-group>
    </div> -->
    <gqf-form :model="model" label-width="200px">
      <gqf-form-item label="用户名">
        <gqf-input placeholder="请输入用户名" v-model="model.username"></gqf-input>
      </gqf-form-item>
      <gqf-form-item label="是否同意">
        <gqf-switch v-model="model.active"></gqf-switch>
      </gqf-form-item>
    </gqf-form>
  </div>
</template>

<script>
// import Demo from '@/demo/demo'
export default {
  // components: {
  //   Demo
  // },
  data () {
    return {
      visible: false,
      money: 100,
      msg: 'gqf is 梅利奥猪猪',
      active: false,
      gender: '1',
      hobby: ['eat', 'play', 'sleep'],
      model: {
        username: '',
        active: true
      }
    }
  },
  methods: {
    fn () {
      console.log('fn')
    },
    close () {
      this.visible = false
    },
    changeMoney (val) {
      // console.log(val)
      this.money = val
    }
  }
}
</script>

<style lang="scss" scoped>
  .row{
    margin-bottom: 20px;
    .gqf-button {
      margin-right: 20px;
    }
  }
  .gqf-input{
    width: 200px;
  }
</style>
