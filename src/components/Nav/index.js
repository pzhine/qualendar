import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

import Menu from '../Menu'
import LogoIcon from '../../icons/logo.svg'

const Nav = () =>
  <div className={styles.nav}>
    <div className={styles.content}>
      <Link to="/" className={styles.logo}>
        <h1>
          <LogoIcon />
        </h1>
      </Link>
    </div>
  </div>

export default Nav
