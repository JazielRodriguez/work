import React from 'react'
import { tabs } from '../utils/tabs'
import styles from '../styles/Tabs.module.css'
import { TabsProps } from '../props/Tabs'
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
