import React from 'react'
import FormSMS from './FormSMS'
import styles from '../../styles/SMS/SMS.module.css'
import ResumeSMS from './ResumeSMS'
const SMS: React.FC = () => {
  return (
    <div className={styles.container}>
      <FormSMS />
      <ResumeSMS />
    </div>
  )
}
export default SMS
