// DEPENDENCIES
import React from 'react'
// COMPONENTS
import FormEmails from './FormEmails'
import ResumeEmails from './ResumeEmails'
// STYLES
import styles from '../../styles/Emails/Emails.module.css'
const Emails: React.FC = () => {
  return (
    <div className={styles.container}>
      <FormEmails />
      <ResumeEmails />
    </div>
  )
}
export default Emails
