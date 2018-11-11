const path = require('path')

const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/ace-admin' : '/'

module.exports = {
  baseUrl: BASE_URL,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 打包
    } else {
      // 开发
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('base', resolve('src/base'))
      .set('api', resolve('src/api'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    port: 9000,
    open: true
  }
}