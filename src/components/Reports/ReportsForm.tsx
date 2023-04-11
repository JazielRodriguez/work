import React from 'react'
import Select from 'react-select'
import styles from '../../styles/Reports/ReportsForm.module.css'
const ReportsForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.flex}>
        <label htmlFor=''>From</label>
        <input type='text' />
      </div>
      <div className={styles.flex}>
        <label htmlFor=''>To</label>
        <input type='text' />
      </div>
      <div className={styles.flex}>
        <label htmlFor=''>Lead type</label>
        <Select />
      </div>
      <div className={styles.flex}>
        <label htmlFor=''>Caller</label>
        <Select />
      </div>
      <div className={styles.flex}>
        <label htmlFor=''>Filter By</label>
        <Select />
      </div>
      <div className={styles.flex}>
        <label htmlFor=''>Status</label>
        <Select />
      </div>
      <div className={styles.button}>
        <button>Search</button>
      </div>
    </form>
  )
}
export default ReportsForm
