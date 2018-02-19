import React from 'react'
import { matchPath, withRouter } from 'react-router'
import cx from 'classnames'
import styles from './styles.scss'

const Blur = ({ children, when, location }) =>
  <div
    className={cx(styles.blur, {
      [styles.isActive]: matchPath(location.pathname, { path: when }),
    })}
  >
    {children}
  </div>

export default withRouter(Blur)
