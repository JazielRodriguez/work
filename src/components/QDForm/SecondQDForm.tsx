// DEPENDENCIES
import React from 'react'
import Select from 'react-select'
// STYLES
import styles from '../../styles/QDForm/SecondQDForm.module.css'
const SecondQDForm: React.FC = () => {
  return (
    <form>
      <div className={styles['second-form']}>
        <div className={styles['second-input']}>
          <label htmlFor=''>Customer name</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Mobile No</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>PAN No</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Date of birth</label>
          <input type='text' />
        </div>

        <div className={styles['second-input']}>
          <label htmlFor=''> Father Name</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Mother Name</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Address</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Pin code</label>
          <input type='text' />
        </div>

        <div className={styles['second-input']}>
          <label htmlFor=''>Designation</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Company</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Company Address</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Company pin code</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Office landline</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>EmailID</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Aadhar No</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Surrogate</label>
          <input type='text' />
        </div>

        <div className={styles['second-input']}>
          <label htmlFor=''>Salary credit bank</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Salary</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Marital status</label>
          <Select />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Spouse name</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Gender</label>
          <Select />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Qualification</label>
          <Select />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Total work experience</label>
          <input type='text' />
        </div>
        <div className={styles['second-input']}>
          <label htmlFor=''>Current company experience</label>
          <input type='text' />
        </div>
      </div>
    </form>
  )
}
export default SecondQDForm
