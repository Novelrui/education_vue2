const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'www.educationcity.cn',
    port: '8080',
    https: false,
  }
})
 