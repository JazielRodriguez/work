import React from 'react'
import Background from '../Background'
import { IconContext } from 'react-icons'
import { ImCross } from 'react-icons/im'
import { EmailModalProps } from '../../props/EmailModal'
import styles from '../../styles/Emails/EmailsModal.module.css'
const EmailModal: React.FC<EmailModalProps> = (props) => {
  console.log(props.modalInfo)
  return (
    <Background>
      <div className={styles.modal}>
        <div className={styles['modal-nav']}>
          <p>{props.modalInfo?.subject}</p>
          <div style={{ cursor: 'pointer' }} onClick={props.onSetCloseModal}>
            <IconContext.Provider value={{ color: '#bbb5b5', size: '1.4rem' }}>
              <ImCross />
            </IconContext.Provider>
          </div>
        </div>
        <form className={styles.form}>
          <div>
            <label htmlFor=''>TO:</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>CC:</label>
            <input type='text' />
          </div>
          <div className={styles.buttons}>
            <button>Reply</button>
            <button>Reply All</button>
            <button>Forward</button>
            <button onClick={props.onSetCloseModal}>Close</button>
          </div>
        </form>
      </div>
    </Background>
  )
}
export default EmailModal
