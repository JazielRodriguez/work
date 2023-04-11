// DEPENDENCIES
import React from 'react'
// STYLES
import styles from '../styles/LastCalls.module.css'
const LastCalls: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
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
      </div>
    </div>
  )
}
export default LastCalls
