import React from 'react'
import moment from 'moment'
import { Link, withRouter } from 'react-router-dom'
import styles from './styles.scss'
import { datePath } from '../../lib/dates'
import EditIcon from '../../icons/edit.svg'

const ViewEvent = ({ event, location }) => {
  const startsAt = moment(event.startsAt)
  const startsAtDisplay = startsAt.format('h:mm a')
  const endsAt = startsAt.clone().add(event.duration, 'm')
  const endsAtDisplay = endsAt.isSame(startsAt, 'day')
    ? endsAt.format('h:mm a')
    : `${endsAt.format('MMM D')} at ${endsAt.format('h:mm a')}`
  const editPath = location.pathname.replace(
    datePath(event.startsAt),
    `${datePath(event.startedOn || event.startsAt)}/${event.id}/edit`
  )
  return (
    <div className={styles.viewEvent}>
      <div className={styles.time}>
        {event.isAllDay ? 'All day' : `${startsAtDisplay} to ${endsAtDisplay}`}
      </div>
      <div className={styles.title}>
        {event.title}
      </div>
      <div className={styles.location}>
        {event.location}
      </div>
      <Link to={editPath} className={styles.edit}>
        <EditIcon />
      </Link>
    </div>
  )
}

export default withRouter(ViewEvent)
