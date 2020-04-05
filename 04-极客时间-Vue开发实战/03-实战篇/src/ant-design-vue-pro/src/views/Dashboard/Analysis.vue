<template>
  <div>
    {{ $t('message')['app.dashboard.analysis.timeLabel'] }} ： 
    <a-date-picker></a-date-picker>
    <Chart :option="chartOption" style="height: 400px"/>
  </div>
</template>

<script>
import Chart from "../../components/Chart"
export default {
  components: {
    Chart
  },
  mounted () {
    this.getChartData()
    this.interval = setInterval(() => {
      this.getChartData()
    }, 2000)
  },
  beforeDestory () {
    clearInterval(this.interval)
  },
  data() {
    return {
      chartOption: {}
    };
  },
  methods: {
    getChartData () {
      this.$request({
        url: '/api/dashboard/chart',
        method: 'get',
        params: { id: 12345 }
      }).then(res => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: res.data
            }
          ]
        }
      })
    }
  }
};
</script>

<style>
</style>