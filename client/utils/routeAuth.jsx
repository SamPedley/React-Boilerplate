import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated
    ? React.createElement(component, props)
    : <Redirect to={{pathname: '/login', state: { from: props.location }}} />
  )} />
)

export const PublicRoute = ({ component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    !isAuthenticated
    ? React.createElement(component, props)
    : <Redirect to={{pathname: '/', state: { from: props.location }}} />
  )} />
)
