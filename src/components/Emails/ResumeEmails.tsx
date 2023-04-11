import React from 'react'
import styles from '../../styles/Emails/ResumeEmails.module.css'
const ResumeEmails: React.FC = () => {
  return (
    <div className={styles.resume}>
      <div className={styles['resume-sent-emails']}>
        <p>Sent emails</p>
        <div>
          <p>To</p>
          <p>Subject</p>
          <p>Received on</p>
        </div>
      </div>
      <div className={styles['resume-received-emails']}>
        <p>Received emails</p>
        <div>
          <p>From_mail</p>
          <p>Subject</p>
          <p>Received on</p>
        </div>
      </div>
    </div>
  )
}
export default ResumeEmails
