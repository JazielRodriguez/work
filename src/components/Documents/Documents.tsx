import React from 'react'
import FormDocuments from './FormDocuments'
import styles from '../../styles/Documents/Documents.module.css'
import ResumeDocuments from './ResumeDocuments'
const Documents: React.FC = () => {
  return (
    <div className={styles.container}>
      <FormDocuments />
      <ResumeDocuments />
    </div>
  )
}
export default Documents
