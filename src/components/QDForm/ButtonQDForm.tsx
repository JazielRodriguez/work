// DEPENDENCIES
import React from 'react'
// REACT PROPS
import { ButtonsQDFormProps } from '../../props/ButtonsQDForm'
// STYLES
import styles from '../../styles/QDForm/ButtonsQDForm.module.css'
const ButtonsQDForm: React.FC<ButtonsQDFormProps> = (props) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.close} onClick={props.onSetQdFormVisible}>
        Close
      </button>
      <button className={styles.send}>Send link</button>
      <button className={styles.save}>Save QD</button>
    </div>
  )
}
export default ButtonsQDForm
