const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'https://cloud-music-api-lyart.vercel.app',
        pathRewrite: { '^/api': '' },
      }
    }
  }
})