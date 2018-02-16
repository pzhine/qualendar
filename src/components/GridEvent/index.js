import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'

const GridEvent = ({ event, className }) =>
  <div
    className={cx(className, styles.gridEvent, {
      [styles.isAllDay]: event.isAllDay,
    })}
  >
    <span>
      {event.title}
    </span>
  </div>

export default GridEvent
