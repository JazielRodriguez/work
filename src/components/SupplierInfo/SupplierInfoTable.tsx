import React from 'react'
import styles from '../../styles/SupplierInfo/SupplierInfoTable.module.css'
const SupplierInfoTable: React.FC = () => {
  return (
    <div className={styles.table}>
      <div>
        <p>SuplID</p>
        <p>Department</p>
        <p>Name</p>
        <p>Designation</p>
        <p>Action</p>
      </div>
      <div>
        <p>ID1</p>
        <p>Some apartment</p>
        <p>Some name</p>
        <p>Manager</p>
        <button>Click to call</button>
      </div>
      <div>
        <p>ID1</p>
        <p>Some apartmentSome apartment Some apartment</p>
        <p>Some name</p>
        <p>Manager</p>
        <button>Click to call</button>
      </div>
      <div>
        <p>ID1</p>
        <p>Some apartment</p>
        <p>Some name</p>
        <p>Manager</p>
        <button>Click to call</button>
      </div>
    </div>
  )
}
export default SupplierInfoTable
