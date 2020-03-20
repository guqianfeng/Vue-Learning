<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider 
        :theme="navTheme" 
        :trigger="null" 
        collapsible 
        v-model="collapsed"
        v-if="navLayout === 'left'"
      >
        <div class="logo">Ant Design Vue Pro</div>
        <SiderMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon 
            class="trigger" 
            @click="collapsed = !collapsed"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          >
          </a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />  
  </div>
</template>

<script>
import Header from './Header'
import SiderMenu from './SiderMenu'
import Footer from './Footer'
import SettingDrawer from '../components/SettingDrawer/index'
export default {
  data() {
    return {
      collapsed: false
    }
  },
  components: {
    Header,
    SiderMenu,
    Footer,
    SettingDrawer
  },
  computed: {
    navTheme () {
      return this.$route.query.navTheme || 'dark'
    },
    navLayout () {
      return this.$route.query.navLayout || 'left'
    }
  }
}
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.trigger:hover {
  background-color: #eee;
}
.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}
.nav-theme-dark {
  color: #fff;
}
</style>