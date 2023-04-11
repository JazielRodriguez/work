import React from 'react'
import styles from '../../styles/PersonalInfo/PersonalInfo.module.css'
import PersonalInfoForm from './PersonalInfoForm'
const PersonalInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <PersonalInfoForm />
    </div>
  )
}
export default PersonalInfo
