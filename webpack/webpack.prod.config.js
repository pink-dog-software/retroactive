/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(require('./webpack.base.config'), {
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
})
