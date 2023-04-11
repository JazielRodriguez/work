// DEPENDENCIES
import React from 'react'
import Select from 'react-select'
// STYLES
import styles from '../../styles/QDForm/FirstQDForm.module.css'
const FirstQDForm: React.FC = () => {
  return (
    <form>
      <div className={styles['first-form']}>
        <div className={styles.input}>
          <label htmlFor=''>Select bank for eligibility</label>
          <Select />
        </div>
        <div className={styles.input}>
          <label htmlFor=''>Select card</label>
          <Select />
        </div>
        <div className={styles.input}>
          <label htmlFor=''>Select card apply type</label>
          <Select />
        </div>
      </div>
    </form>
  )
}
export default FirstQDForm
