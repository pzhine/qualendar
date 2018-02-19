/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import actions from '../../redux/app/actions'
import transitionProps from '../../hoc/transitionProps'
import store from '../../redux/configureStore'
import { monthPath } from '../../lib/dates'
import styles from './styles.scss'

import ScrollManager from '../ScrollManager'
import Fade from '../Fade'
import Blur from '../Blur'
import Nav from '../Nav'
import ViewMonth from '../ViewMonth'
import Grid from '../Grid'
import GridHead from '../GridHead'
import Redirect from '../Redirect'

const onClick = () => {
  if (!store.getState().app.menuIsActive) {
    return
  }
  store.dispatch(actions.toggleMenuIsActive(false))
}

const App = ({ location, transitions }) =>
  <Provider store={store}>
    <ScrollManager location={location}>
      <Redirect from="/" to={monthPath(Date.now())}>
        <main className={styles.app} onClick={onClick}>
          <Nav />
          <Blur when="/m/:y/:m/:d">
            <ViewMonth className={styles.content}>
              <GridHead />
              <Grid />
            </ViewMonth>
          </Blur>
        </main>
      </Redirect>
    </ScrollManager>
  </Provider>

export default compose(
  withRouter,
  transitionProps({
    propsToTransition: () => ({
      location: {
        duration: 300,
        compare: ({ pre, post }) => pre.pathname === post.pathname,
      },
    }),
  })
)(App)
