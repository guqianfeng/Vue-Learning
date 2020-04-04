<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      :afterVisibleChange="afterVisibleChange"
      width="300px"
    >
      <template v-slot:handle>
        <a-icon 
          :type="visible ? 'close' : 'setting'"
          @click="visible = !visible"
          class="setting-drawer-handle"
        ></a-icon>
      </template>
      <div>
        <h2>主题风格定制</h2>
        <a-radio-group @change="(e) => handleSettingChange('navTheme', e.target.value)" :value="$route.query.navTheme || 'dark'">
          <a-radio value="dark">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <a-radio-group @change="(e) => handleSettingChange('navLayout', e.target.value)" :value="$route.query.navLayout || 'left'">
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    methods: {
      afterVisibleChange(val) {
        console.log('visible', val)
      },
      onClose() {
        this.visible = false;
      },
      handleSettingChange (type, value) {
        // console.log(type, value)
        this.$router.push({
          query: {
            ...this.$route.query,
            [type]: value
          }
        })
      }
    },
  };
</script>
<style lang="less" src="./index.less"></style>
