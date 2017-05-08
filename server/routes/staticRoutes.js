const express = require('express')
const staticRouter = express.Router()
const fallback = require('express-history-api-fallback')

const clientPath = `client/public`

staticRouter.use(express.static(clientPath))
staticRouter.use(fallback('index.html', { root: clientPath }))

module.exports = staticRouter
