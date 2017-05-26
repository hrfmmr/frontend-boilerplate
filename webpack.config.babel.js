export default {
  entry: ['babel-polyfill', './src/js/index.es6'],

  output: {
    path: 'app',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  }
}
