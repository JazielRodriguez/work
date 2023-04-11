import React from 'react'
import styles from '../../styles/Comments/Comments.module.css'
import PrevComment from './PrevComment'
import FormComments from './FormComments'
import ListComments from './ListComments'
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
