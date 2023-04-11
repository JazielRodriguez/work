import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styles from '../../styles/Enquiries/PendingLeads.module.css'
const PendingLeads: React.FC = () => {
  const [listIsVisible, setListIsVisible] = useState(true)
  const listStateHandler = () => {
    setListIsVisible((prev) => !prev)
  }
  return (
    <div>
      <div
        className={styles['pending-leads-header']}
        onClick={listStateHandler}
      >
        <p>Pending leads</p>
        <IconContext.Provider value={{ size: '1.4rem' }}>
          <div>{listIsVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
        </IconContext.Provider>
      </div>
      {listIsVisible && (
        <div>
          <div className={styles.table}>
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
        </div>
      )}
    </div>
  )
}
export default PendingLeads