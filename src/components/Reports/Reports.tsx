import React from 'react'
import ReportsForm from './ReportsForm'
import ReportsTable from './ReportsTable'
import styles from '../../styles/Reports/Reports.module.css'
const Reports: React.FC = () => {
  return (
    <div className={styles.container}>
      <ReportsForm />
      <ReportsTable />
    </div>
  )
}
export default Reports
