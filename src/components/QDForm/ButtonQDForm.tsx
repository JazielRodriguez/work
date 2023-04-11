// DEPENDENCIES
import React from 'react'
// STYLES
import styles from '../../styles/QDForm/ButtonsQDForm.module.css'
const ButtonsQDForm: React.FC = () => {
  return (
    <div className={styles.buttons}>
      <button className={styles.close}>Close</button>
      <button className={styles.send}>Send link</button>
      <button className={styles.save}>Save QD</button>
    </div>
  )
}
export default ButtonsQDForm
