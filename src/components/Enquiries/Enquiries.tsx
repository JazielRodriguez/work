// DEPENDENCIES
import React from 'react'
// COMPONENTS
import PendingLeads from './PendingLeads'
import MatureLeads from './MatureLeads'
import NotMatureLeads from './NotMatureLeads'
// STYLES
import styles from '../../styles/Enquiries.module.css'

const Enquiries: React.FC = () => {
  // const { data } = useQuery({
  //   queryKey: ['Emails'],
  //   queryFn: () =>
  //     axios
  //       .post('http://localhost:3000/api/GetPreviousLeads?number=9958735482')
  //       .then((res) => res.data)
  // })
  return (
    <div className={styles.enquiries}>
      <div className={styles.container}>
        <PendingLeads />
        <MatureLeads />
        <NotMatureLeads />
        {/* <div dangerouslySetInnerHTML={{ __html: data }}></div> */}
      </div>
    </div>
  )
}
export default Enquiries
