import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'utils/styles.scss'

import Routes from 'routes'
import Header from 'components/Header'

const app = ({ store }) => (
  <Provider store={store} >
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  </Provider>
)

export default app
