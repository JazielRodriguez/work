import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import styles from '../../styles/AssignLeads/AssignLeads.module.css'
import AssignLeadsTable from './AssignLeadsTable'
import AllAssignedLeads from './AllAssignedLeads'
import { useMediaQuery } from 'react-responsive'
import MobileTable from './MobileTable'
const AssignLeads: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })
  const { data } = useQuery({
    queryKey: ['AssignNowLeads'],
    queryFn: () =>
      axios.post(
        'http://localhost:3000/api/GetAssignownLeads?staffid=abhinav.singh%40dayibpl.com'
      ).then(res => res.data)
  })
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>My assigned leads</p>
      </div>
      {isMobile ? <MobileTable /> : <AssignLeadsTable info={data} />}

      <AllAssignedLeads />
    </div>
  )
}
export default AssignLeads
