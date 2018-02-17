import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styles from './styles.scss'
import { getParentPath } from '../../lib/dates'
import CloseIcon from '../../icons/close.svg'

const CloseButton = ({ location }) =>
  <Link to={getParentPath(location.pathname)} className={styles.closeButton}>
    <CloseIcon />
  </Link>

export default withRouter(CloseButton)
