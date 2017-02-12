module.exports = {
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
  }
}
