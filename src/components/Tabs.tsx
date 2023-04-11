// DEPENDENCIES
import React from 'react'
// REACT PROPS
import { TabsProps } from '../props/Tabs'
// UTILITIES (FAKE DATA)
import { tabs } from '../utils/tabs'
// STYLES
import styles from '../styles/Tabs.module.css'
const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <div className={styles.tabs}>
      <div className={styles['tabs-content']}>
        {tabs.map((tab, index) => (
          <p
            onClick={() => props.onActivateTab(index)}
            key={index}
            className={props.tabIsActive === index ? styles.active : undefined}
          >
            {tab}
          </p>
        ))}
      </div>
    </div>
  )
}
export default Tabs
