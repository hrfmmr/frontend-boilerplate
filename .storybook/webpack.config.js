const path = require('path');

module.exports = function(storybookBaseConfig, configType) {

  storybookBaseConfig.module.loaders.push({
      test: /\.es6$/,
      loaders: ["babel-loader"],
      include: path.resolve(__dirname, '../src/js/components')
    });

  const resolveExts = storybookBaseConfig.resolve.extensions;
  storybookBaseConfig.resolve.extensions = resolveExts.concat([
    '.es6'
  ])

  storybookBaseConfig.module.loaders.push({
    test: /\.css$/,
    loaders: ['style', 'css'],
    include: path.resolve(__dirname, '../app')
  });

  return storybookBaseConfig;
};
