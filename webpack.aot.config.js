'use strict';

const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    entry: {
      'app.aot': './app/bootstrap.aot.ts'
    },
    output: {
      path: path.resolve(__dirname, './dist/aot'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.aot.html',
        inject: false
      })
    ],
    devServer: {
      contentBase: 'dist/aot',
    },
    bail: true
  });
};
