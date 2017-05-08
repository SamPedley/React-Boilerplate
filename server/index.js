const app = require('express')()
const bodyParser = require('body-parser')

const routes = require('./routes')

const { SERVER_PORT = 8080, NODE_DEBUG = false } = process.env

if (NODE_DEBUG) {
  app.use(require('morgan')('dev'))
  app.use(require('./utils/hotModuleMiddleware'))
}

app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)

app.listen(SERVER_PORT)

console.log(`Server Listening on Port ${SERVER_PORT}${NODE_DEBUG ? ' in Debug Mode' : ''}...`)
