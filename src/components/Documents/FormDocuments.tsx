import React from 'react'
import Select from 'react-select'
import styles from '../../styles/Documents/FormDocuments.module.css'
const FormDocuments: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.flex}>
        <label htmlFor=''>Select file type</label>
        <Select />
        <input type='file' />
      </div>
      <div className={styles.buttons}>
        <button>Upload</button>
        <button>Update</button>
      </div>
    </form>
  )
}
export default FormDocuments
