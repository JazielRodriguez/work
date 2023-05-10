// DEPENDENCIES
import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { IconContext } from 'react-icons'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
// STYLES
import styles from '../../styles/Enquiries/MatureLeads.module.css'
const MatureLeads: React.FC = () => {
  const [listIsVisible, setListIsVisible] = useState(false)
  const listStateHandler = () => {
    setListIsVisible((prev) => !prev)
  }
  const { data } = useQuery({
    queryKey: ['Mature Leads'],
    queryFn: () =>
      axios
        .post(
          'http://61.246.34.128:7779/api/GetPreviousLeadsMature?number=9958735482'
        )
        .then((res) => res.data)
  })
  return (
    <div>
      <div className={styles['mature-leads-header']} onClick={listStateHandler}>
        <p>Mature leads</p>
        <IconContext.Provider value={{ size: '1.4rem' }}>
          <div>{listIsVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
        </IconContext.Provider>
      </div>
      {listIsVisible && (
        <div dangerouslySetInnerHTML={{ __html: data }}>
          {/* <div className={styles.table}>
            <div>
              <p>Some</p>
              <p>CallerName</p>
              <p>CustomerName</p>
              <p>LeadType</p>
              <p>Status</p>
              <p>UpdateDate</p>
              <p>ExpiryDate</p>
            </div>
            <div>
              <p>CAL1</p>
              <p>Some cool name</p>
              <p>Another cool</p>
              <p>Health</p>
              <p>dispute</p>
              <p>06-01-2020</p>
              <p>20-20-1000</p>
            </div>
          </div>
          <div className={styles.pagination}>
            <p>Showing 1 of 1 entries</p>
            <div>
              <p>Previous</p>
              <p>1</p>
              <p>Next</p>
            </div>
          </div> */}
        </div>
      )}
    </div>
  )
}
export default MatureLeads
