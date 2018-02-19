import React from 'react'
import styles from './styles.scss'
import LoadingIcon from '../../icons/loading.svg'

const Loader = () =>
  <div className={styles.loader}>
    <LoadingIcon />
  </div>

export default Loader
