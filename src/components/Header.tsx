import React from 'react'
import Nav from './Nav'
import styles from '../styles/Header.module.css'
import { HeaderProps } from '../props/Header'
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-info']}>
        <div>
          <p>AUTO CALLING</p>
          <p>LOGIN TIME</p>
        </div>
        <div>
          <p>HELP DOCUMENT</p>
        </div>
        <div>
          <p>Logout</p>
          <p>Total Calls</p>
        </div>
      </div>
      <Nav
        onSetFaqVisible={props.onSetFaqVisible}
        onSetManualDialVisible={props.onSetManualDialVisible}
      />
    </header>
  )
}
export default Header
