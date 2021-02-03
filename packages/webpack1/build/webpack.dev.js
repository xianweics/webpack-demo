const baseWebpack = require('./webpack.base');
const { merge } = require('webpack-merge');
module.exports = merge(baseWebpack, {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist', //Content base
    inline: true,
    open: true,
    host: 'localhost',
    port: 8080
  }
});
