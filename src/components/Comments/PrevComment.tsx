// DEPENDENCIES
import React from 'react'
// STYLES
import styles from '../../styles/Comments/PrevComment.module.css'
const PrevComment: React.FC = () => {
  return (
    <div className={styles.prev}>
      <p className={styles.label}>Previous Comment</p>
      <div className={styles['prev-comment-field']}>
        <p>An interesting comment about that because is interesting</p>{' '}
      </div>
    </div>
  )
}
export default PrevComment
