const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        process: JSON.stringify(undefined),
        'DISABLE_DOCX_XLSX': JSON.stringify(true),
      })
    ]
  }
})
