// DEPENDENCIES
import React from 'react'
// COMPONENTS
import PendingLeads from './PendingLeads'
import MatureLeads from './MatureLeads'
import NotMatureLeads from './NotMatureLeads'
// STYLES
import styles from '../../styles/Enquiries.module.css'

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
