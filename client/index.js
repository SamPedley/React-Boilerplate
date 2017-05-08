import React from 'react'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './app'
import reducer from 'reducers'
import hotModuleRender from 'utils/hotModuleRender'

const { NODE_DEBUG = false } = process.env

if (NODE_DEBUG) {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)))
  hotModuleRender(<App store={store} />)
  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers')))
    module.hot.accept('./app', () => hotModuleRender(<App store={store} />))
  }
} else {
  const store = createStore(reducer, applyMiddleware(thunk))
  render(<App store={store} />, document.getElementById('App'))
}
