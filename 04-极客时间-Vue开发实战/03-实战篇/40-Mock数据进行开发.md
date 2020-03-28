# 40-Mock数据进行开发

## 练习

* 先axios发送请求，请求echarts的数据
  ```js
  <template>
    <div>
      <Chart :option="chartOption" style="height: 400px"/>
    </div>
  </template>

  <script>
  import Chart from "../../components/Chart"
  import axios from 'axios'
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
        axios.get('/api/dashboard/chart', {params: { id: 12345 }}).then(res => {
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
  ```
* 在根目录下新建mock文件夹
* 比如我们这次要处理dashboard下的分析表chart的数据，我们可以新建个dashboard_chart.js
  ```js
  function chart (method) {
    let res = null
    switch (method) {
      case 'GET':
        res = [90, 40, 100, 20, 30, 48]
        break
    
      default:
        res = null
        break
    }
    return res
  }

  module.exports = chart  
  ```
* 在vue.config.js增加配置，可以参考webpack官网，找devServer
  ```js
  module.exports = {
    css: {
      loaderOptions: {
        less: {
          javascriptEnabled: true
        }
      },
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          bypass: function(req, res) {
            if (req.headers.accept.indexOf('html') !== -1) {
              console.log('Skipping proxy for browser request.');
              return '/index.html';
            } else {
              const name = req.path.split('/api/')[1].split('/').join("_")
              const mock = require(`./mock/${name}`)
              const result = mock(req.method)
              delete require.cache[require.resolve(`./mock/${name}`)]
              return res.send(result)
            }
          }
        }
      }
    }
  }  
  ```

## 知道你还不过瘾继续吧       

* [返回目录](../../README.md)
* [上一节-39-在组件中使用其他第三方库](../03-实战篇/39-在组件中使用其他第三方库.md)
* [下一节-41-与服务端进行交互](../03-实战篇/41-与服务端进行交互.md)