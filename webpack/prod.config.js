const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const zopfli = require('@gfx/zopfli');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'assets/scripts/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: false,
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'assets/styles/[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    // new ExtractTextPlugin('assets/styles/[name].[hash].css'),
    new CopyWebpackPlugin([
      {
        from: './src/assets/fonts',
        to: 'assets/fonts'
      },
      {
        from: './src/assets/images',
        to: 'assets/images'
      },
      {
        from: './src/assets/svg',
        to: 'assets/svg'
      },
      {
        from: './src/robots.txt',
        to: 'robots.txt'
      },
      {
        from: './src/manifest.json',
        to: 'manifest.json'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      compressionOptions: {
        numiterations: 15
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      }
    })
  ]
});
