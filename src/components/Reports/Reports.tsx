import React from 'react'
import ReportsForm from './ReportsForm'
import ReportsTable from './ReportsTable'
import styles from '../../styles/Reports/Reports.module.css'
import { useMediaQuery } from 'react-responsive'
import MobileReports from './MobileReports'
const Reports: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })
  return (
    <div className={styles.container}>
      <ReportsForm />
      {isMobile ? <MobileReports /> : <ReportsTable />}
    </div>
  )
}
export default Reports
