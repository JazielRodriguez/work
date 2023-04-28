import React from 'react'
import styles from '../../styles/SearchLead/SearchLeadForm.module.css'
const SearchLeadForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <label htmlFor=''>Enter Number or Lead ID</label>
      <input type='number' />
      <button>Search</button>
    </form>
  )
}
export default SearchLeadForm
