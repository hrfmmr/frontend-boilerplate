/* eslint-disable */
module.exports = {
  'plugins': [
    require('postcss-import'),
    require('postcss-custom-properties'),
    require('postcss-nested')
  ],
  'autoprefixer': {
    'browsers': [
      'last 2 versions',
      'iOS >= 9.3.5',
      'Android >= 5.0',
    ],
  },
}

