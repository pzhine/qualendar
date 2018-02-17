import React from 'react'
import styles from './styles.scss'

import DatePicker from '../DatePicker'
import NewEventButton from '../NewEventButton'
import ViewEvent from '../ViewEvent'
import CloseButton from '../CloseButton'

const ViewDay = ({ date, events }) =>
  <div className={styles.viewDay}>
    <div className={styles.header}>
      <DatePicker date={date} />
      <div className={styles.newEventButton}>
        <NewEventButton date={date} />
      </div>
      <CloseButton />
    </div>
    <div className={styles.events}>
      {events.map(evt => <ViewEvent event={evt} key={evt.id} />)}
    </div>
  </div>

export default ViewDay
