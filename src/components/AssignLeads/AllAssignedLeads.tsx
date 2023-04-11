import React from 'react'
import styles from '../../styles/AssignLeads/AllAssignedLeads.module.css'
import SevenDaysLeads from './SevenDaysLeads'
import FifteenDaysLeads from './FifteenDaysLeads'
import MoreFifteenLeads from './MoreFifteenLeads'
const AllAssignedLeads: React.FC = () => {
  return (
    <div>
      <div className={styles.title}>
        <p>All assigned leads</p>
      </div>
      <div className={styles['lists-container']}>
        <SevenDaysLeads />
        <FifteenDaysLeads />
        <MoreFifteenLeads />
      </div>
    </div>
  )
}

export default AllAssignedLeads
