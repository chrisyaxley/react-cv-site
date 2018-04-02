const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'src', 'index.js'),
  build: path.join(__dirname, 'public', 'build')
};
console.log(process.env.NODE_ENV);
var isProd = (process.env.NODE_ENV === 'production');
var config = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    PATHS.app,
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'assets/js/index.js'
  },
  module: {
    rules: [{
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      }, {
         test: /\.svg$/,
         exclude: [/src\/assets\/images\/svgs\/backgrounds/],
         loader: 'svg-inline-loader'
     }, {
        test: /\.svg$/,
        include: [/src\/assets\/images\/svgs\/backgrounds/],
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'inline-cheap-module-source-map',
    devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    proxy: {
      '/api': {
        target: {
          host: '127.0.0.1',
          protocol: 'http:',
          port: 8081
        },
        changeOrigin: false,
        ignorePath: false,
        secure: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'assets/css/[name].css',
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};

if (!isProd) {
  console.log('Development Envrioment');
  config.module.rules.push({
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
          loader: 'css-loader',
          query: {
            modules: true,
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        'sass-loader'
      ]
    }),
  });
} else {
  // Production only config
  console.log('In production mode');
  config.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
          loader: 'css-loader',
          query: {
            modules: true,
            sourceMap: false,
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    })
  });
  config.plugins.push(
    new webpack.DefinePlugin({
     'process.env':{
       'NODE_ENV': JSON.stringify('production')
     }
   }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  )
};

module.exports = config;
