import React from 'react'
import styles from '../../styles/AssignLeads/AssignLeads.module.css'
import AssignLeadsTable from './AssignLeadsTable'
import AllAssignedLeads from './AllAssignedLeads'
const AssignLeads: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>My assigned leads</p>
      </div>
      <AssignLeadsTable />
      <AllAssignedLeads />
    </div>
  )
}
export default AssignLeads
