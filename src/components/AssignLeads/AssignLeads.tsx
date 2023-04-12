import React from 'react'
import styles from '../../styles/AssignLeads/AssignLeads.module.css'
import AssignLeadsTable from './AssignLeadsTable'
import AllAssignedLeads from './AllAssignedLeads'
import { useMediaQuery } from 'react-responsive'
import MobileTable from './MobileTable'
const AssignLeads: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>My assigned leads</p>
      </div>
      {isMobile ? <MobileTable /> : <AssignLeadsTable /> }

      <AllAssignedLeads />
    </div>
  )
}
export default AssignLeads
