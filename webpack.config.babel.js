const webpack = require('webpack')
const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
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
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
          ],
        })),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
}
