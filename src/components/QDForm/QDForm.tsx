// DEPENDENCIES

import React from 'react'
import { IconContext } from 'react-icons'
import { ImCross } from 'react-icons/im'
// COMPONENTS
import SecondQDForm from './SecondQDForm'
import FirstQDForm from './FIrstQDForm'
import ThirdQDForm from './ThirdQDForm'
import ButtonsQDForm from './ButtonQDForm'
import Background from '../Background'
// REACT PROPS
import { QDFormProps } from '../../props/QDForm'
// STYLES
import styles from '../../styles/QDForm/QDForm.module.css'
const QDForm: React.FC<QDFormProps> = (props) => {
  return (
    <Background>
      <div className={styles.modal}>
        <div className={styles['modal-nav']}>
          <p>CALL1</p>
          <div style={{ cursor: 'pointer' }} onClick={props.onSetQdFormVisible}>
            <IconContext.Provider value={{ color: '#bbb5b5', size: '1.4rem' }}>
              <ImCross />
            </IconContext.Provider>
          </div>
        </div>
        <FirstQDForm />
        <div
          style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #bbb5b5',
            width: '90%',
            margin: '0 auto',
            color: 'blue'
          }}
        >
          <p>Card Benefits</p>
        </div>
        <SecondQDForm />
        <ThirdQDForm />
        <div
          style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid #bbb5b5',
            width: '90%',
            margin: '0 auto'
          }}
        >
          <p>Documents required</p>
        </div>
        <ButtonsQDForm onSetQdFormVisible={props.onSetQdFormVisible}/>
      </div>
    </Background>
  )
}
export default QDForm
