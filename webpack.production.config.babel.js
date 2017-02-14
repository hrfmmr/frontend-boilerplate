import webpack from 'webpack'
import merge from 'webpack-merge'

import base from './webpack.config.babel.js'


export default merge(base, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})
