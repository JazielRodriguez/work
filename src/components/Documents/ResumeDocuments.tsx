import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import styles from '../../styles/Documents/ResumeDocuments.module.css'
const ResumeDocuments: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['GetDocuments'],
    queryFn: () =>
      axios
        .post('http://localhost:3000/api/GetDocuments?number=CALL202102202705')
        .then((res) => res.data)
  })

  return (
    <div className={styles.table}>
      {/* <div className={styles.flex}>
        <p>Select</p>
        <p>Type</p>
        <p>Filename</p>
        <p>DateTime</p>
        <p>Added by</p>
      </div>
      <div className={styles.flex}>
        <p>
          <Select />
        </p>
        <p>Previous policy</p>
        <p>someName.pdf</p>
        <p>31/31/31 - 12:12:12</p>
        <p>AUTO</p>
      </div>
      <div className={styles.flex}>
        <p>
          <Select />
        </p>
        <p>Previous policy</p>
        <p>someName.pdf</p>
        <p>31/31/31 - 12:12:12 31/31/31 - 12:12:1231/31/31 - 12:12:12</p>
        <p>AUTO</p>
      </div>
      <div className={styles.flex}>
        <p>
          <Select />
        </p>
        <p>Previous policy</p>
        <p>someName.pdf</p>
        <p>31/31/31 - 12:12:12</p>
        <p>AUTO</p>
      </div> */}
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}
export default ResumeDocuments
