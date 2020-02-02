<template>
  <div id="app">
    <div class="row">
      <gqf-button>按钮</gqf-button>
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
      <gqf-button round>按钮</gqf-button>
      <gqf-button round type="primary">按钮</gqf-button>
      <gqf-button round type="success">按钮</gqf-button>
      <gqf-button round type="info">按钮</gqf-button>
      <gqf-button round type="warning">按钮</gqf-button>
      <gqf-button round type="danger">按钮</gqf-button>
    </div>
    <div class="row">
      <gqf-button circle>我</gqf-button>
      <gqf-button circle type="primary">梅</gqf-button>
      <gqf-button circle type="success">利</gqf-button>
      <gqf-button circle type="info">奥</gqf-button>
      <gqf-button circle type="warning">猪</gqf-button>
      <gqf-button circle type="danger">猪</gqf-button>
    </div>
  </div>
</template>

<script>
export default {

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
