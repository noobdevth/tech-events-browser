import React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-static'
import {lifecycle} from 'recompose'
import {injectGlobal} from 'emotion'

import createStore from '../ducks'

import Routes from 'react-static-routes'

const store = createStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)

const enhance = lifecycle({
  componentWillMount() {
    injectGlobal`
      body {
        margin: 0;
        font-weight: 300;
        font-family: Roboto, "Helvetica Neue", "Sukhumvit Set", Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `
  },
})

export default enhance(App)
