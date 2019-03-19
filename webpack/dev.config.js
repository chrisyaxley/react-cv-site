const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    disableHostCheck: true,
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: {
          host: '127.0.0.1',
          protocol: 'http:',
          port: 5001
        },
        changeOrigin: false,
        ignorePath: false,
        secure: false
      }
    },
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
