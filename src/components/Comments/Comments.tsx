// DEPENDENCIES
import React from 'react'
// COMPONENTS
import PrevComment from './PrevComment'
import FormComments from './FormComments'
import ListComments from './ListComments'
// STYLES
import styles from '../../styles/Comments/Comments.module.css'
const Comments: React.FC = () => {
  return (
    <div className={styles.container}>
      <PrevComment />
      <FormComments />
      <ListComments />
    </div>
  )
}
export default Comments
