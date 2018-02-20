/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router-dom'
import actions from '../../redux/app/actions'
import configureStore from '../../redux/configureStore'
import { monthPath } from '../../lib/dates'
import styles from './styles.scss'

import Blur from '../Blur'
import Nav from '../Nav'
import ViewMonth from '../ViewMonth'
import Grid from '../Grid'
import GridHead from '../GridHead'
import Redirect from '../Redirect'
import ViewDay from '../ViewDay'
import EditEvent from '../EditEvent'
import DayModal from '../DayModal'
import EventModal from '../EventModal'

const App = ({ history }) => {
  const store = configureStore({ history })
  const onClick = () => {
    if (!store.getState().app.menuIsActive) {
      return
    }
    store.dispatch(actions.toggleMenuIsActive(false))
  }
  return (
    <Provider store={store}>
      <Redirect from="/" to={monthPath(Date.now())}>
        <main className={styles.app} onClick={onClick}>
          <Nav />
          <Blur when="/m/:y/:m/:d" activeClassName={styles.monthMask}>
            <ViewMonth className={styles.content}>
              <GridHead />
              <Grid />
            </ViewMonth>
          </Blur>
          <DayModal>
            <ViewDay />
          </DayModal>
          <EventModal>
            <EditEvent />
          </EventModal>
        </main>
      </Redirect>
    </Provider>
  )
}

export default withRouter(App)
