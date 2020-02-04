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

    <!-- <gqf-dialog title="我是梅利奥猪猪"></gqf-dialog> -->
    <gqf-dialog>
      <template v-slot:title>
        <h1>你们的猪大佬</h1>
      </template>
    </gqf-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    fn () {
      console.log('fn')
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
</style>
