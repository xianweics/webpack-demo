const baseWebpack = require('./webpack.base');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge(baseWebpack, {
  devtool: 'cheap-module-source-map',
  mode: 'production'
})
;

