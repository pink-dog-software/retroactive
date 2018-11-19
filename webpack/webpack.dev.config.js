/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(require('./webpack.base.config'), {
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.EnvironmentPlugin({
      API_URL: 'http://localhost:3000'
    })
  ]
})
