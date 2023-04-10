import React from 'react'
import Background from './Background'
import styles from '../styles/ManualDial.module.css'
import { IconContext } from 'react-icons'
import { ImCross } from 'react-icons/im'
import { ManualDialProps } from '../props/ManualDial'
const ManualDial: React.FC<ManualDialProps> = (props) => {
  return (
    <Background>
      <div className={styles.modal}>
        <div className={styles['modal-nav']}>
          <h2>Manual dial</h2>
          <div
            onClick={props.onSetManualDialVisible}
            style={{ cursor: 'pointer' }}
          >
            <IconContext.Provider value={{ color: '#bbb5b5', size: '1.4rem' }}>
              <ImCross />
            </IconContext.Provider>
          </div>
        </div>
        <form className={styles.form}>
          <label htmlFor='dial'>Enter number to dial</label>
          <input id='dial' type='number' placeholder='Enter phone number' />
          <button>Dial Now</button>
        </form>
      </div>
    </Background>
  )
}
export default ManualDial
