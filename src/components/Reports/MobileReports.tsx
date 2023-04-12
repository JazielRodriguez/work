import React from 'react'
import styles from '../../styles/Reports/MobileReports.module.css'
const MobileReports: React.FC = () => {
  return (
    <div className={styles.table}>
      <div className={styles.container}>
        <div>
          <p>RecordID</p>
          <p>CallerName</p>
          <p>CustName</p>
          <p>LeadType</p>
          <p>CreationDate</p>
          <p>LastUpdateDate</p>
          <p>ExpiryDate</p>
          <p>Status</p>
          <p>Action</p>
        </div>
        <div>
          <p>RecordID</p>
          <p>CallerName</p>
          <p>CustName</p>
          <p>LeadType</p>
          <p>CreationDate</p>
          <p>LastUpdateDate</p>
          <p>ExpiryDate</p>
          <p>Status</p>
          <button>Click to call</button>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <p>RecordID</p>
          <p>CallerName</p>
          <p>CustName</p>
          <p>LeadType</p>
          <p>CreationDate</p>
          <p>LastUpdateDate</p>
          <p>ExpiryDate</p>
          <p>Status</p>
          <p>Action</p>
        </div>
        <div>
          <p>RecordID</p>
          <p>CallerName</p>
          <p>CustName</p>
          <p>LeadType</p>
          <p>CreationDate</p>
          <p>LastUpdateDate</p>
          <p>ExpiryDate</p>
          <p>Status</p>
          <button>Click to call</button>
        </div>
      </div>
    </div>
  )
}
export default MobileReports
