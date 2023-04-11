import React from 'react'
import CheckboxInput from '../CheckboxInput'
import styles from '../../styles/QDForm/ThirdQDForm.module.css'
const ThirdQDForm: React.FC = () => {
  return (
    <div className={styles['third-form']}>
      <p>Select bank</p>
      <form>
        <CheckboxInput label='SBI' id='sbi' />
        <CheckboxInput label='SCB' id='scb' />
        <CheckboxInput label='YES' id='yes' />
        <CheckboxInput label='ICICI' id='icici' />
        <CheckboxInput label='HDFC' id='hdfc' />
        <CheckboxInput label='INDUS' id='indus' />
        <CheckboxInput label='RBL' id='rbl' />
        <CheckboxInput label='AMEX' id='amex' />
        <CheckboxInput label='CITI' id='citi' />
      </form>
    </div>
  )
}
export default ThirdQDForm
