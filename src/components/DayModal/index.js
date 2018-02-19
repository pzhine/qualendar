import React from 'react'
import { connect } from 'react-redux'
import { withRouter, matchPath } from 'react-router'
import { pathToMoment } from '../../lib/dates'
import actions from '../../redux/app/actions'
import styles from './styles.scss'

const DayModal = ({ months, location, children }) => {
  const match = matchPath(location.pathname, {
    path: '/:v/:year/:month/:day',
    exact: true,
  })
  if (!match) {
    return null
  }
  const dayMoment = pathToMoment(location.pathname)
  const month = months[`${dayMoment.year()}.${dayMoment.month()}`]
  if (!month || month.isLoading) {
    return null
  }
  const events = month.events[match.params.day]
  return (
    <div className={styles.dayModal}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { date: dayMoment.valueOf(), events })
      )}
    </div>
  )
}

export default withRouter(
  connect(
    state => ({
      months: state.app.months,
    }),
    actions
  )(DayModal)
)
