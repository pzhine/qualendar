import React from 'react'
import moment from 'moment'
import { chunk, range } from 'lodash'
import { monthMath } from '../../lib/dates'
import styles from './styles.scss'

import GridColumnHead from '../GridColumnHead'
import GridDay from '../GridDay'

const Grid = ({ date, events }) => {
  const weeks = chunk(monthMath.visibleDays(date), 7)

  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        {range(7).map(day => <GridColumnHead key={day} day={day} />)}
      </div>
      <div className={styles.body}>
        {weeks.map(week =>
          <div
            className={styles.row}
            key={`${moment(week[0]).month()}.${moment(week[0]).date()}`}
          >
            {week.map(day =>
              <GridDay
                key={moment(day).day()}
                date={day}
                events={events[moment(day).date()]}
                isOffMonth={!moment(day).isSame(date, 'month')}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Grid
