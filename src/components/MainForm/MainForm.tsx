import React from 'react'
import Select from 'react-select'
import styles from '../../styles/MainForm/MainForm.module.css'
const MainForm: React.FC = () => {
  return (
    <div>
      <form className={styles.form}>
        <div className={styles['input-container']}>
          <div className={styles.flex}>
            <label htmlFor=''>RecordID</label>
            <input type='text' />
          </div>
          <div className={styles.flex}>
            <label htmlFor=''>CallerName</label>
            <input type='text' />
          </div>
          <div className={styles.flex}>
            <label htmlFor=''>CustomerName</label>
            <input type='text' />
          </div>
          <div className={styles.flex}>
            <label htmlFor=''>Phone 1</label>
            <input type='text' />
          </div>
        </div>
        <div className={styles['input-container']}>
          <div className={styles.flex}>
            <label htmlFor=''>Send to bank</label>
            <Select />
          </div>
          <div className={styles.flex}>
            <label htmlFor=''>Approved ID/ Policy No</label>
            <input type='text' />
          </div>
          <div className={styles.flex}>
            <label htmlFor=''>Add Reminder</label>
            <input type='text' />
          </div>
          <div className={styles.flex}>
            <label htmlFor=''>Hour</label>
            <Select />
          </div>
          <div className={styles.flex}>
            <label htmlFor=''>Minutes</label>
            <Select />
          </div>
        </div>
      </form>
    </div>
  )
}
export default MainForm
