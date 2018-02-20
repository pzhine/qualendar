import React from 'react'
import cx from 'classnames'
import styles from './styles.scss'

const spansMultiple = e => e.isAllDay && e.duration > 1 && !e.startedOn

const GridEvent = ({ event, className, prevEvent }) =>
  <div
    className={cx(className, styles.gridEvent, {
      [styles.isAllDay]: event.isAllDay,
      [styles.spansMultiple]: spansMultiple(event),
      [styles.needsSpacer]: prevEvent && spansMultiple(prevEvent),
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
