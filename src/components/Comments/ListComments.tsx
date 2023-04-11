// DEPENDENCIES
import React from 'react'
// STYLES
import styles from '../../styles/Comments/ListComments.module.css'
const ListComments: React.FC = () => {
  return (
    <div className={styles.table}>
      <div>
        <p>CallerID</p>
        <p>Remarks</p>
        <p>OpenDateTime</p>
      </div>
      <div>
        <p>IFK3 5025 2403</p>
        <p>Lead Open</p>
        <p>08/04/21- 12:20:31</p>
      </div>
      <div>
        <p>IFK3 5025 2403</p>
        <p>Lead Open</p>
        <p>08/04/21- 12:20:31</p>
      </div>
      <div>
        <p>IFK3 5025 2403</p>
        <p>Lead Open</p>
        <p>08/04/21- 12:20:31</p>
      </div>
    </div>
  )
}
export default ListComments
