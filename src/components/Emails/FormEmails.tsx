// DEPENDENCIES
import React from 'react'
import Select from 'react-select'
// STYLES
import styles from '../../styles/Emails/FormEmails.module.css'
const FormEmails: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles['input-container']}>
        <div className={styles.flex}>
          <label htmlFor=''>CC</label>
          <input type='text' />
        </div>
        <div className={styles.flex}>
          <label htmlFor=''>Subject</label>
          <input type='text' />
        </div>
      </div>
      <div className={styles['input-container']}>
        <div className={styles.flex}>
          <label htmlFor=''>Type</label>
          <Select />
        </div>
        <div className={styles.flex}>
          <label htmlFor=''>Body</label>
          <input type='text' />
        </div>
      </div>
      <div className={styles.button}>
        <button>Send</button>
      </div>
    </form>
  )
}
export default FormEmails
