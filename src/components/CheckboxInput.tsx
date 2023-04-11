import React from 'react'
import { CheckboxInputProps } from '../props/CheckboxInput'
import styles from '../styles/CheckboxInput.module.css'
const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
  return (
    <div className={styles.input}>
      <input name='bank' type='radio' id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}
export default CheckboxInput
