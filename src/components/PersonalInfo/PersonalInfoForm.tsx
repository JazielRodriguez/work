import React from 'react'
import Select from 'react-select'
import styles from '../../styles/PersonalInfo/PersonalInfoForm.module.css'
const PersonalInfoForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <label htmlFor=''>Provider</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Lead type</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Email</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Phone 2</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>City</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>State</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Pan No</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Address</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Party ID</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Party Name</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Member ID</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Company</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Policy No</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Product</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Customer Type</label>
        <input type='text' name='' id='' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Transfer lead</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Priority</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Click here to mark for whatsapp</label>
        <input type='checkbox' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Pin code</label>
        <Select />
      </div>
      <button>Update lead</button>
    </form>
  )
}
export default PersonalInfoForm
