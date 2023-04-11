import React from 'react'
import Select from 'react-select'
import styles from '../../styles/SupplierInfo/SupplierInfoForm.module.css'
const SupplierInfoForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.flex}>
        <div className={styles.input}>
          <label htmlFor=''>Insurance Company</label>
          <Select />
        </div>
        <div className={styles.input}>
          <label htmlFor=''>Department</label>
          <Select />
        </div>
        <div className={styles.button}>
          <button>Get person</button>
        </div>
      </div>
    </form>
  )
}
export default SupplierInfoForm
