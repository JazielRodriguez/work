import React from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styles from '../../styles/AssignLeads/AssignedLeadsHeader.module.css'
import { AssignedLeadsHeaderProps } from '../../props/AssignedLeadsHeader'
const AssignedLeadsHeader: React.FC<AssignedLeadsHeaderProps> = (props) => {
  return (
    <div
      className={styles['all-assigned-leads-header']}
      onClick={props.onSetVisible}
    >
      <p>{props.title}</p>
      <IconContext.Provider value={{ size: '1.4rem' }}>
        <div>{props.isVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </IconContext.Provider>
    </div>
  )
}
export default AssignedLeadsHeader
