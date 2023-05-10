// DEPENDENCIES
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// STYLES
import styles from '../styles/LastCalls.module.css'
const LastCalls: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['LastCalls'],
    queryFn: () =>
      axios
        .post(
          'http://61.246.34.128:7779//api/GetLastTenCalls?VICIUSER=reception'
        )
        .then((res) => res.data)
  })

  return (
    <div className={styles.container}>
      {/* <div className={styles.table}>
        <div>
          <p>RecordID</p>
          <p>Phone</p>
          <p>CustName</p>
          <p>EndTime</p>
        </div>
        <div>
          <p>2603402</p>
          <p>120XXXXXXX49</p>
          <p>Some cool name</p>
          <p>31/1/15, 12:1:12</p>
        </div>
        <div>
          <p>2603402</p>
          <p>120XXXXXXX49</p>
          <p>Some cool name</p>
          <p>31/1/15, 12:1:12</p>
        </div>
        <div>
          <p>2603402</p>
          <p>120XXXXXXX49</p>
          <p>Some cool name</p>
          <p>31/1/15, 12:1:12</p>
        </div>
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}
export default LastCalls
