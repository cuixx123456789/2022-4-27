const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports={
  devServer:{
    // open:true
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3000',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}