import React from 'react'
import moment from 'moment'
import MediaQuery from 'react-responsive'
import styles from './styles.scss'
import config from '../../content/config.json'

const GridColumnHead = ({ day }) =>
  <div className={styles.gridColumnHead}>
    <MediaQuery minWidth={config.breakpoints.tablet + 1}>
      {moment().day(day).format('ddd')}
    </MediaQuery>
    <MediaQuery maxWidth={config.breakpoints.tablet}>
      {moment().day(day).format('dd').substr(0, 1)}
    </MediaQuery>
  </div>

export default GridColumnHead
