const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/index.js',
  ],

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },
}
