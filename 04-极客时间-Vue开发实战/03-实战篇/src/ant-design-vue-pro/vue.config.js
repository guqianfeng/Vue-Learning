const path = require('path');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const webpack = require('webpack');

const options = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'),
  stylesDir: path.join(__dirname, './src'),
  varFile: path.join(__dirname, './node_modules/ant-design-vue/lib/style/themes/default.less'),
  mainLessFile: '',
  themeVariables: ['@primary-color'],
  generateOnce: false
}

const themePlugin = new AntDesignThemePlugin(options);

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
        },
        javascriptEnabled: true
      }
    },
  },
  configureWebpack: {
    plugins: [
      themePlugin,
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        pathRewrite: {'^/api' : ''},
        target: 'http://localhost:3000',
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          } else if (process.env.MOCK !== 'none') {
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