import React from 'react'
import { withRouter, Redirect as RedirectRoute } from 'react-router'

const Redirect = ({ to, from, location, children }) => {
  if (location.pathname === from) {
    return <RedirectRoute to={to} />
  }
  return children
}

export default withRouter(Redirect)
