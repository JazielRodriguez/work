// DEPENDENCIES
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// UTILS (FAKE DATA)
// import { emails } from '../../utils/emails'
// STYLES
import styles from '../../styles/Emails/ResumeEmails.module.css'
// import TableEmail from './TableEmail'
const ResumeEmails: React.FC = () => {
  const { data: dataOne } = useQuery({
    queryKey: ['Received emails'],
    queryFn: () =>
      axios
        .post(
          'https://work-gules.vercel.app/api/GetRecEmailLogs?leadid=CALL202102202705'
        )
        .then((res) => res.data)
  })
  const { data: dataTwo } = useQuery({
    queryKey: ['Received emails'],
    queryFn: () =>
      axios
        .post(
          'https://work-gules.vercel.app/api/GetSentEmailLogs?leadid=CALL202102202705'
        )
        .then((res) => res.data)
  })

  return (
    <div className={styles.resume}>
      {/* <div className={styles['resume-sent-emails']}>
        <p>Sent emails</p>
        <TableEmail
          headers={['To', 'Subject', 'Received on']}
          emails={emails}
        />
      </div> */}

      <div dangerouslySetInnerHTML={{ __html: dataOne }}></div>
      {/* <div>
        <p className={styles['received-header']}>Received emails</p>
        <TableEmail
          headers={['From_mail', 'Subject', 'Received on']}
          emails={emails}
        />
      </div> */}

      <div dangerouslySetInnerHTML={{ __html: dataTwo }}></div>
    </div>
  )
}
export default ResumeEmails
