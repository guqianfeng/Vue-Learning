<template>
  <div style=" display: flex;height: 100vh;justify-content: center;align-items: center">
    <IconFont type="icon-icon-404" style="font-size: 200px"/>
    <img :src="logo" alt="">
  </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      logo
    }
  }
};
</script>

<style>
</style>