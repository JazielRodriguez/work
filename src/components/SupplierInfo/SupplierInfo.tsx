import React from 'react'
import SupplierInfoForm from './SupplierInfoForm'
import styles from '../../styles/SupplierInfo/SupplierInfo.module.css'
import SupplierInfoTable from './SupplierInfoTable'
const SupplierInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <SupplierInfoForm />
      <SupplierInfoTable />
    </div>
  )
}
export default SupplierInfo
