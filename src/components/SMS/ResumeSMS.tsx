import React from 'react'
import styles from '../../styles/SMS/ResumeSMS.module.css'
const ResumeSMS: React.FC = () => {
  return (
    <div className={styles.resume}>
      <div className={styles['resume-sent-sms']}>
        <div>
          <p>Sent date</p>
          <p>Sent by</p>
          <p>Details</p>
        </div>
      </div>
    </div>
  )
}
export default ResumeSMS
