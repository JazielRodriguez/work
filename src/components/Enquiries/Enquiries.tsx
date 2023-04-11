import React from 'react'
import styles from '../../styles/Enquiries.module.css'

import PendingLeads from './PendingLeads'
import MatureLeads from './MatureLeads'
import NotMatureLeads from './NotMatureLeads'
const Enquiries: React.FC = () => {
  return (
    <div className={styles.enquiries}>
      <div className={styles.container}>
        <PendingLeads />
        <MatureLeads />
        <NotMatureLeads />
      </div>
    </div>
  )
}
export default Enquiries
