import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'

const GridEvent = ({ event, className }) =>
  <div
    className={cx(className, styles.gridEvent, {
      [styles.isAllDay]: event.isAllDay,
      [styles.spansMultiple]:
        event.isAllDay && event.duration > 1 && !event.startedOn,
    })}
    style={
      event.isAllDay && event.duration > 1 && !event.startedOn
        ? { width: `${100 / 7 * event.duration}%` }
        : {}
    }
  >
    <span>
      {event.title}
    </span>
  </div>

export default GridEvent
