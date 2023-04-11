import React from 'react'
import Select from 'react-select'
import styles from '../../styles/Documents/ResumeDocuments.module.css'
const ResumeDocuments: React.FC = () => {
  return (
    <div className={styles.table}>
      <div className={styles.flex}>
        <p>Select</p>
        <p>Type</p>
        <p>Filename</p>
        <p>DateTime</p>
        <p>Added by</p>
      </div>
      <div className={styles.flex}>
        <p>
          <Select />
        </p>
        <p>Previous policy</p>
        <p>someName.pdf</p>
        <p>31/31/31 - 12:12:12</p>
        <p>AUTO</p>
      </div>
      <div className={styles.flex}>
        <p>
          <Select />
        </p>
        <p>Previous policy</p>
        <p>someName.pdf</p>
        <p>31/31/31 - 12:12:12</p>
        <p>AUTO</p>
      </div>
      <div className={styles.flex}>
        <p>
          <Select />
        </p>
        <p>Previous policy</p>
        <p>someName.pdf</p>
        <p>31/31/31 - 12:12:12</p>
        <p>AUTO</p>
      </div>
    </div>
  )
}
export default ResumeDocuments
