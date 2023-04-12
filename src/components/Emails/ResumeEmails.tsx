// DEPENDENCIES
import React from 'react'
// UTILS (FAKE DATA)
import { emails } from '../../utils/emails'
// STYLES
import styles from '../../styles/Emails/ResumeEmails.module.css'
import TableEmail from './TableEmail'
const ResumeEmails: React.FC = () => {
  return (
    <div className={styles.resume}>
      <div className={styles['resume-sent-emails']}>
        <p>Sent emails</p>
        <TableEmail
          headers={['To', 'Subject', 'Received on']}
          emails={emails}
        />
      </div>
      <div>
        <p className={styles['received-header']}>Received emails</p>
        <TableEmail
          headers={['From_mail', 'Subject', 'Received on']}
          emails={emails}
        />
      </div>
    </div>
  )
}
export default ResumeEmails
