import React, { useState } from 'react'
import EmailModal from './EmailModal'
import { Email, TableEmailProps } from '../../props/TableEmail'
import styles from '../../styles/Emails/TableEmail.module.css'
const TableEmail: React.FC<TableEmailProps> = (props) => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false)
  const [modalInfo, setModalInfo] = useState<Email>()
  const modalStateHandler = () => {
    setModalIsVisible((prev) => !prev)
  }
  return (
    <div>
      <div className={styles.table}>
        <div className={styles['header-table']}>
          {props.headers.map((header, index) => (
            <div key={index}>
              <p>{header}</p>
            </div>
          ))}
        </div>
        {props.emails.map((email, index) => (
          <div key={index} className={styles['cell-table']}>
            <div>
              <p>{email.email}</p>
            </div>
            <div>
              <p
                onClick={() => {
                  setModalInfo(email)
                  modalStateHandler()
                }}
              >
                {email.subject}
              </p>
            </div>
            <div>
              <p>{email.sender}</p>
            </div>
          </div>
        ))}
      </div>
      {modalIsVisible && (
        <EmailModal modalInfo={modalInfo} onSetCloseModal={modalStateHandler} />
      )}
    </div>
  )
}
export default TableEmail
