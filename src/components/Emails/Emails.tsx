import React from 'react'
import styles from '../../styles/Emails/Emails.module.css'
import FormEmails from './FormEmails'
import ResumeEmails from './ResumeEmails'
const Emails: React.FC = () => {
  return (
    <div className={styles.container}>
      <FormEmails />
      <ResumeEmails />
    </div>
  )
}
export default Emails
