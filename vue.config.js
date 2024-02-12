const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/submit-form': {
        target: 'http://localhost:8000', // Backend server URL
        changeOrigin: true
      }
    }
  }
})

