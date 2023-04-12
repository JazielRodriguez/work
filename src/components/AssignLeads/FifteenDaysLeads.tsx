import React, { useState } from 'react'
import AssignedLeadsHeader from './AssignedLeadsHeader'
import AssignLeadsTable from './AssignLeadsTable'
import { useMediaQuery } from 'react-responsive'
import MobileTable from './MobileTable'
const FifteenDaysLeads: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })
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
      {listIsVisible && isMobile && <MobileTable />}
      {listIsVisible && !isMobile && <AssignLeadsTable />}
    </div>
  )
}
export default FifteenDaysLeads
