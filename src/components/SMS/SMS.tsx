// DEPENDENCIES
import React from 'react'
// COMPONENTS
import FormSMS from './FormSMS'
import ResumeSMS from './ResumeSMS'
// STYLES
import styles from '../../styles/SMS/SMS.module.css'
const SMS: React.FC = () => {
  return (
    <div className={styles.container}>
      <FormSMS />
      <ResumeSMS />
    </div>
  )
}
export default SMS
