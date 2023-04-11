// DEPENDENCIES
import React from 'react'
import { Link } from 'wouter'
// REACT PROPSs
import { NavProps } from '../props/Nav'
// UTILITIES (FAKE DATA)
import { links } from '../utils/nav-links'
// STYLES
import styles from '../styles/Nav.module.css'
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
              <Link
              href={link.label}
              key={index}
              onClick={props.onSetManualDialVisible}
              >
                {link.label}
              </Link>
              )
            : link.onSetQdFormVisible === true
              ? (
                <Link
                href={link.label}
                key={index}
                onClick={props.onSetQdFormVisible}
                >
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
