import React from 'react'
import Select from 'react-select'
import styles from '../../styles/SMS/FormSMS.module.css'
const FormSMS: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.select}>
        <Select />
      </div>
      <div className={styles.textarea}>
        <textarea rows={6}></textarea>
      </div>
      <div className={styles.button}>
        <button>Send</button>
      </div>
    </form>
  )
}
export default FormSMS
