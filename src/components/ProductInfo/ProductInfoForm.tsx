import React from 'react'
import Select from 'react-select'
import styles from '../../styles/ProductInfo/ProductInfoForm.module.css'
const ProductInfoForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <label htmlFor=''>IssueType</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>VehicleType</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Period</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>PolicyType</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Manufacturer</label>
        <Select />
      </div>
      <div className={`${styles.input} ${styles.large}`}>
        <label htmlFor=''>Select Vehicle</label>
        <input type='text' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>RTO</label>
        <input type='text' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Previous Expiry</label>
        <input type='text' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Vehicle No</label>
        <input type='text' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Regn Date</label>
        <input type='text' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Claim token</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>NCB Per</label>
        <Select />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>IDV</label>
        <input type='text' />
      </div>
      <div className={styles.input}>
        <label htmlFor=''>Year</label>
        <Select />
      </div>
      <div className={styles.buttons}>
        <button>Premium Calculator</button>
        <button>Update IDV</button>
        <button>Display quote</button>
      </div>
    </form>
  )
}
export default ProductInfoForm
