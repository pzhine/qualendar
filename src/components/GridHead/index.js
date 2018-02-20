import React from 'react'
import moment from 'moment'
import { monthPath } from '../../lib/dates'
import styles from './styles.scss'

import NewEventButton from '../NewEventButton'
import Picker from '../Picker'

const GridHead = ({ date }) =>
  <div className={styles.gridHead}>
    <div className={styles.month}>
      {moment(date).format('MMMM')} {moment(date).format('YYYY')}
    </div>
    <Picker
      className={styles.nav}
      nextPath={monthPath(moment(date).add(1, 'month'))}
      prevPath={monthPath(moment(date).add(-1, 'month'))}
      positionBottom
    />
    <NewEventButton date={date} />
  </div>

export default GridHead
