import React, { useState } from 'react'
import AssignedLeadsHeader from './AssignedLeadsHeader'
import AssignLeadsTable from './AssignLeadsTable'
const MoreFifteenLeads: React.FC = () => {
  const [listIsVisible, setListIsVisible] = useState<boolean>(false)
  const listStateHandler = () => {
    setListIsVisible((prev) => !prev)
  }
  return (
    <div>
      <AssignedLeadsHeader
        title='More than 15 days'
        isVisible={listIsVisible}
        onSetVisible={listStateHandler}
      />
      {listIsVisible && <AssignLeadsTable />}
    </div>
  )
}
export default MoreFifteenLeads
