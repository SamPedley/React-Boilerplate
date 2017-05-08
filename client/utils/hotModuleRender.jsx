import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const hotModuleRender = Component => render(
  <AppContainer>
    { Component }
  </AppContainer>,
  document.getElementById('App')
)

export default hotModuleRender
