import React from 'react'
import styles from '../styles/Background.module.css'
const Background: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={styles.background}>{props.children}</div>
}
export default Background
