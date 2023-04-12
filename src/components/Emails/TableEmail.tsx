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
        <div>
          {props.headers.map((header, index) => (
            <p key={index}>{header}</p>
          ))}
        </div>
        {props.emails.map((email, index) => (
          <div key={index}>
            <p>{email.email}</p>
            <p
              onClick={() => {
                setModalInfo(email)
                modalStateHandler()
              }}
            >
              {email.subject}
            </p>
            <p>{email.sender}</p>
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
