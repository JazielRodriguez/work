import React from 'react'
import { GiIronCross } from 'react-icons/gi'
import Select from 'react-select'
import styles from '../../styles/MainForm/MainForm.module.css'
const MainForm: React.FC = () => {
  return (
    <div>
      <div className={styles['main-form-header']}>
        <p>
          <span>
            <GiIronCross />
          </span>
          <span>
            RecordCall: <b>CALL1</b>
          </span>
        </p>
        <p>Lead type:</p>
      </div>
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
            <label className={styles['label-input']}>
              <label style={{ color: 'blue' }}>Update status</label>
              <input type='checkbox' />
              Send to bank
            </label>
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
