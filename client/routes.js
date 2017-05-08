import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from 'pages/Home'
import ErrorPage from 'pages/Error'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route component={ErrorPage} />
  </Switch>
)

export default Routes
