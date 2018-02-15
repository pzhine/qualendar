import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'

const GridEvent = ({ event }) =>
  <div className={cx(styles.gridEvent, { [styles.isAllDay]: event.isAllDay })}>
    <span>
      {event.title}
    </span>
  </div>

export default GridEvent
