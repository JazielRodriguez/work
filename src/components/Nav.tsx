import React from 'react'
import { Link } from 'wouter'
import { links } from '../utils/nav-links'
import styles from '../styles/Nav.module.css'
import { NavProps } from '../props/Nav'
const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav className={styles.nav}>
      {links.map((link, index) =>
        link.onSetFaqVisible === true
          ? (
          <Link href={link.label} key={index} onClick={props.onSetFaqVisible}>
            {link.label}
          </Link>
            )
          : link.onSetManualDialVisible === true
            ? (
              <Link href={link.label} key={index} onClick={props.onSetManualDialVisible}>
                {link.label}
              </Link>
              )
            : (
              <Link href={link.label} key={index}>
                {link.label}
              </Link>
              )
      )}
    </nav>
  )
}
export default Nav
