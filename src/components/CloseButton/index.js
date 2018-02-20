import React from 'react'
import cx from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import styles from './styles.scss'
import { getParentPath } from '../../lib/dates'
import CloseIcon from '../../icons/close.svg'

const CloseButton = ({ location, className }) =>
  <Link
    to={getParentPath(location.pathname)}
    className={cx(styles.closeButton, className)}
  >
    <CloseIcon />
  </Link>

export default withRouter(CloseButton)
