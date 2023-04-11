import React, { useState } from 'react'
import AssignedLeadsHeader from './AssignedLeadsHeader'
import AssignLeadsTable from './AssignLeadsTable'
const FifteenDaysLeads: React.FC = () => {
  const [listIsVisible, setListIsVisible] = useState<boolean>(false)
  const listStateHandler = () => {
    setListIsVisible((prev) => !prev)
  }
  return (
    <div>
      <AssignedLeadsHeader
        title='Last 8-15 days'
        isVisible={listIsVisible}
        onSetVisible={listStateHandler}
      />
      {listIsVisible && <AssignLeadsTable />}
    </div>
  )
}
export default FifteenDaysLeads
