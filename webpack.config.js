const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  context: resolve('client'),

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve('client/public'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [resolve('client'), 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({ loader: 'css-loader!sass-loader' })
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|otf|eot|svg|woff(2)?)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_DEBUG': JSON.stringify(process.env.NODE_DEBUG)
    })
  ],

  devtool: 'source-map'
})
