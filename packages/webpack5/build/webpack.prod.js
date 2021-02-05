const baseWebpack = require('./webpack.base');
const { merge } = require('webpack-merge');
module.exports = merge(baseWebpack, {
  devtool: 'cheap-module-source-map',
  mode: 'production'
})
;

