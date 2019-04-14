const path = require('path')

module.exports = {
  entry: './src/App/App.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  }
}
