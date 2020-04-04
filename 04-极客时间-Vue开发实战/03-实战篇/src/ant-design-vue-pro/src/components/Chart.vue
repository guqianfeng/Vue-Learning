<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from 'echarts'
import { addListener, removeListener } from 'resize-detector'
import debounce from 'lodash/debounce'
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option (val) {
      this.chart.setOption(val);
    }
    // option: {
    //   handler (val) {
    //     this.chart.setOption(val)
    //   },
    //   deep: true
    // }
  },
  created () {
    this.resize = debounce(this.resize, 300)
  },
  mounted () {
    this.renderChart()
    addListener(this.$refs.chartDom, this.resize)
  },
  methods: {
    resize () {
      // console.log('resize')
      this.chart.resize()
    },
    renderChart () {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption(this.option);
    }
  },
  beforeDestory () {
    removeListener(this.$refs.chartDom, this.resize)
    this.chart.dispose()
    this.chart = null
  }
}
</script>

<style>

</style>