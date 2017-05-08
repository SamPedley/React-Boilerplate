const app = require('express')()
const webpack = require('webpack')

const webpackConfig = require('../../webpack.config')()
var compiler = webpack(webpackConfig)

const devOptions = {
  historyApiFallback: true,
  stats: { colors: true },
  hot: true,
  contentBase: 'client/',
  publicPath: '/',
  status: 'minimal'
}

app.use(require('webpack-dev-middleware')(compiler, devOptions))

app.use(require('webpack-hot-middleware')(compiler))

module.exports = app
