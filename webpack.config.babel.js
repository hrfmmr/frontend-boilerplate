import webpack from 'webpack'

export default {
  entry: './src/js/app.es6',

  output: {
    path: 'app',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.es6$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
