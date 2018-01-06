import React from 'react'
import {Router} from 'react-static'
import {lifecycle} from 'recompose'
import {injectGlobal} from 'emotion'

import Routes from 'react-static-routes'

const App = () => (
  <Router>
    <Routes />
  </Router>
)

const enhance = lifecycle({
  componentWillMount() {
    injectGlobal`
      body {
        margin: 0;
        font-family: Roboto, Helvetica Neue, sans-serif;
      }
    `
  }
})

export default enhance(App)
