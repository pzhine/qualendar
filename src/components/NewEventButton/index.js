import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { datePath, getViewPath } from '../../lib/dates'
import styles from './styles.scss'
import AddIcon from '../../icons/add.svg'

const NewEventButton = ({ date, location }) => {
  const viewPath = getViewPath(location.pathname)
  const linkPath = date
    ? `${viewPath}${datePath(date)}/new`
    : `${viewPath}${datePath(Date.now())}/new`
  return (
    <div className={styles.newEventButton}>
      <Link to={linkPath} className={styles.newEventButton}>
        <AddIcon />
      </Link>
    </div>
  )
}

export default withRouter(NewEventButton)
