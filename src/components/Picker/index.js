import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import styles from './styles.scss'
import BackIcon from '../../icons/back.svg'

const Picker = ({ nextPath, prevPath, className }) =>
  <div className={cx(styles.picker, className)}>
    <Link to={prevPath} className={styles.prev}>
      <BackIcon />
    </Link>
    <Link to={nextPath} className={styles.next}>
      <BackIcon />
    </Link>
  </div>

export default Picker
