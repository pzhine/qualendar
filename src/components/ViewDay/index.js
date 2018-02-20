import React from 'react'
import styles from './styles.scss'

import DatePicker from '../DatePicker'
import NewEventButton from '../NewEventButton'
import ViewEvent from '../ViewEvent'
import CloseButton from '../CloseButton'

const ViewDay = ({ date, events }) =>
  <div className={styles.viewDay}>
    <div className={styles.header}>
      <DatePicker date={date} pickerIsOnBottom />
      <NewEventButton date={date} />
      <CloseButton className={styles.closeButton} />
    </div>
    <div className={styles.events}>
      {events
        ? events.map(evt => <ViewEvent event={evt} key={evt.id} />)
        : <div className={styles.noEvents}>Nothing to do yet...</div>}
    </div>
  </div>

export default ViewDay
