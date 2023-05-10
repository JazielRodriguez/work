// DEPENDENCIES
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// STYLES
import styles from '../../styles/Comments/ListComments.module.css'
const ListComments: React.FC = () => { 
  const { data } = useQuery({
    queryKey: ['Emails'],
    queryFn: () =>
      axios
        .post(
          'https://work-gules.vercel.app/api/GetLeadOpenReport?number=CALL202102202705'
        )
        .then((res) => res.data)
  })
  return (
    <div className={styles.table}>
      {/* <div>
        <p>CallerID</p>
        <p>Remarks</p>
        <p>OpenDateTime</p>
      </div>
      <div>
        <p>IFK3 5025 2403</p>
        <p>Lead Open</p>
        <p>08/04/21- 12:20:31</p>
      </div>
      <div>
        <p>IFK3 5025 2403</p>
        <p>Lead Open</p>
        <p>08/04/21- 12:20:31</p>
      </div>
      <div>
        <p>IFK3 5025 2403</p>
        <p>Lead Open</p>
        <p>08/04/21- 12:20:31</p>
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}
export default ListComments
