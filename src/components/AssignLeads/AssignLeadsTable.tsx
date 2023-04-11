import React from 'react'
import styles from '../../styles/AssignLeads/AssignLeadsTable.module.css'
const AssignLeadsTable: React.FC = () => {
  return (
    <div className={styles.table}>
      <div>
        <p>RecordID</p>
        <p>Caller</p>
        <p>Costumer</p>
        <p>LeadType</p>
        <p>Status</p>
        <p>UpdateDate</p>
        <p>AssignDate</p>
        <p>AssignBy</p>
        <p>ExpiryDate</p>
        <p>Priority</p>
      </div>
      <div>
        <p>CALL1</p>
        <p>Amar</p>
        <p>shn vdya</p>
        <p>POS</p>
        <p>CALLBACk</p>
        <p>06/10/21 - 13:24:21</p>
        <p>06/10/21 - 13:24:21</p>
        <p>email@email.com</p>
        <p>06/10/21 - 13:24:21</p>
        <p>High</p>
      </div>
      <div>
        <p>CALL1</p>
        <p>Amar</p>
        <p>shn vdya</p>
        <p>POS</p>
        <p>CALLBACk</p>
        <p>06/10/21 - 13:24:21</p>
        <p>06/10/21 - 13:24:21</p>
        <p>email@email.com</p>
        <p>06/10/21 - 13:24:21</p>
        <p>High</p>
      </div>
    </div>
  )
}
export default AssignLeadsTable
