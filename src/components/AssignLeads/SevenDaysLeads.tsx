import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import AssignedLeadsHeader from './AssignedLeadsHeader'
import AssignLeadsTable from './AssignLeadsTable'
import { useMediaQuery } from 'react-responsive'
import MobileTable from './MobileTable'
const SevenDaysLeads: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })
  const [listIsVisible, setListIsVisible] = useState<boolean>(false)
  const listStateHandler = () => {
    setListIsVisible((prev) => !prev)
  }
  const { data } = useQuery({
    queryKey: ['AssignLeads'],
    queryFn: () =>
      axios
        .post(
          'https://work-gules.vercel.app/api/GetAssignLeads?staffid=abhinav.singh%40dayibpl.com&userlist=abhinav.singh%40dayibpl.com'
        )
        .then((res) => res.data)
  })
  return (
    <div>
      <AssignedLeadsHeader
        title='Last 7 days'
        isVisible={listIsVisible}
        onSetVisible={listStateHandler}
      />
      {listIsVisible && isMobile && <MobileTable />}
      {listIsVisible && !isMobile && <AssignLeadsTable info={data} />}
    </div>
  )
}
export default SevenDaysLeads
