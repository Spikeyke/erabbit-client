const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动引入，使用绝对路径
      // 需要是path.join来拼接完整路径
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  // chainWebpack: config => {
  //   // 图片加载
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .tap(options => Object.assign(options, { limit: 10000 }))
  // },
  devServer: {
    historyApiFallback: true,
    // 通过 http://www.corho.com:8080/#/ 访问自己本地项目
    allowedHosts: 'all'
  },
  configureWebpack: {
    externals: {
      qc: 'QC'
    }
  }
}
