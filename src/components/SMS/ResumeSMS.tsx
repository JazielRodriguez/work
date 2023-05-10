// DEPENDENCIES
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// STYLES
import styles from '../../styles/SMS/ResumeSMS.module.css'
const ResumeSMS: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['GetSMSLogs'],
    queryFn: () =>
      axios
        .post('http://61.246.34.128:7779/api/GetSMSLogs?leadid=CALL202102202705')
        .then((res) => res.data)
  })
  return (
    <div className={styles.resume}>
      {/* <div className={styles['resume-sent-sms']}>
        <div>
          <p>Sent date</p>
          <p>Sent by</p>
          <p>Details</p>
        </div>
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}
export default ResumeSMS
