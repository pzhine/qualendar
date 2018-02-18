import React from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import styles from './styles.scss'
import config from '../../content/config.json'
import { datePath } from '../../lib/dates'
import Picker from '../Picker'

const DatePicker = ({ date, location }) => {
  const m = moment(date)
  const nextPath = location.pathname.replace(
    datePath(m),
    datePath(m.clone().add(1, 'd'))
  )
  const prevPath = location.pathname.replace(
    datePath(m),
    datePath(m.clone().add(-1, 'd'))
  )
  return (
    <div className={styles.datePicker}>
      <MediaQuery minWidth={config.breakpoints.tablet + 1}>
        <span className={styles.date}>
          {m.format('dddd')}, {m.format('MMMM')} {m.format('D')}
        </span>
      </MediaQuery>
      <MediaQuery maxWidth={config.breakpoints.tablet}>
        <span className={styles.date}>
          {m.format('ddd')}, {m.format('MMM')} {m.format('D')}
        </span>
      </MediaQuery>
      <Picker className={styles.nav} prevPath={prevPath} nextPath={nextPath} />
    </div>
  )
}

export default withRouter(DatePicker)
