import React from 'react'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import App from '../components/App'

const history = createBrowserHistory()

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

export default Root
