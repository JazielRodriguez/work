// DEPENDENCIES
import React from 'react'
import Select from 'react-select'
// STYLES
import styles from '../../styles/Comments/FormComments.module.css'
const FormComments: React.FC = () => {
  return (
    <form className={styles.form}>
      <label htmlFor=''>Add comment</label>
      <Select />
    </form>
  )
}
export default FormComments
