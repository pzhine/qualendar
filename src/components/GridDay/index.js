import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import cx from 'classnames'
import moment from 'moment'
import styles from './styles.scss'
import config from '../../content/config.json'
import { datePath } from '../../lib/dates'

import GridEvent from '../GridEvent'

const GridDay = ({ events, date, isOffMonth }) => {
  const d = moment(date)
  const actionPath = events && events.length ? '' : '/new'
  return (
    <Link
      to={`/m/${datePath(d)}${actionPath}`}
      className={cx(styles.gridDay, { [styles.isOffMonth]: isOffMonth })}
    >
      <div
        className={cx(styles.date, {
          [styles.isToday]: d.isSame(moment(), 'day'),
        })}
      >
        {d.date()}
      </div>
      <div
        className={cx(styles.events, {
          [styles.hasEvents]: events && events.length,
        })}
      >
        <MediaQuery minWidth={config.breakpoints.tablet + 1}>
          {events &&
            events.map((e, idx) =>
              <GridEvent
                key={e.id}
                event={e}
                className={styles.event}
                prevEvent={events[idx - 1]}
              />
            )}
        </MediaQuery>
      </div>
    </Link>
  )
}

export default GridDay
