const baseWebpack = require('./webpack.base');
const { merge } = require('webpack-merge');
module.exports = merge(baseWebpack, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    progress: true,
    contentBase: './dist',
    inline: true,
    open: true,
    host: 'localhost',
    port: 8080
  }
});
