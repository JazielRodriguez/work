// DEPENDENCIES
import React from 'react'
// COMPONENTS
import Nav from './Nav'
// REACT PROPS
import { HeaderProps } from '../props/Header'
// STYLES
import styles from '../styles/Header.module.css'
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
        onSetQdFormVisible={props.onSetQdFormVisible}
        onSetAppActive={props.onSetAppActive}
      />
    </header>
  )
}
export default Header
